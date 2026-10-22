import { NextResponse } from "next/server";

interface ContactPayload {
  type?: "contact" | "application";
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  role?: string;
  link?: string;
  /** Honeypot — real users never fill this */
  company?: string;
}

const clean = (v: unknown, max = 5000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bots fill every field; pretend success so they move on
  if (clean(body.company)) return NextResponse.json({ ok: true });

  const isApplication = body.type === "application";
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 30);
  const message = clean(body.message);
  const role = clean(body.role, 120);
  const link = clean(body.link, 500);

  if (!name || !email || (!isApplication && !message) || (isApplication && !role)) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "hr@techyverve.in";
  const subject = isApplication
    ? `Job application: ${role} — ${name}`
    : `New enquiry from ${name}`;
  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    role && `Role: ${role}`,
    link && `Resume / portfolio: ${link}`,
  ].filter(Boolean);
  const text = `${details.join("\n")}\n\n${message}`;

  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const fromEmail = process.env.CONTACT_FROM_EMAIL || "TechyVerve Website <onboarding@resend.dev>";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from: fromEmail, to: [toEmail], reply_to: email, subject, text }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
    } else {
      // No Resend key configured — relay through FormSubmit so mail still arrives.
      // The very first message triggers a one-time activation email to the inbox.
      const res = await fetch(`https://formsubmit.co/ajax/${toEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          name,
          email,
          phone: phone || "-",
          ...(isApplication ? { role, resume: link || "-" } : {}),
          message: message || "-",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(`FormSubmit ${res.status}: ${JSON.stringify(data)}`);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please email hr@techyverve.in directly." },
      { status: 502 }
    );
  }
}
