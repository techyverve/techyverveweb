"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "err";

interface ContactFormProps {
  /** "application" turns this into the careers form */
  type?: "contact" | "application";
  roles?: string[];
  defaultRole?: string;
}

export default function ContactForm({ type = "contact", roles = [], defaultRole }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const isApp = type === "application";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("err");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  const busy = status === "sending";
  const id = (f: string) => `${type}-${f}`;

  return (
    <form className="contact-box" onSubmit={handleSubmit} id={isApp ? "apply" : undefined}>
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />

      <div className="field-row">
        <div className="field">
          <label htmlFor={id("name")}>NAME *</label>
          <input id={id("name")} name="name" type="text" autoComplete="name" required disabled={busy} />
        </div>
        <div className="field">
          <label htmlFor={id("email")}>EMAIL *</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required disabled={busy} />
        </div>
      </div>
      <div className={isApp ? "field-row" : undefined}>
        <div className="field">
          <label htmlFor={id("phone")}>PHONE</label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" disabled={busy} />
        </div>
        {isApp && (
          <div className="field">
            <label htmlFor={id("role")}>ROLE *</label>
            <select id={id("role")} name="role" required disabled={busy} defaultValue={defaultRole ?? ""}>
              <option value="" disabled>
                Choose a role
              </option>
              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
              <option>Internship</option>
              <option>Other</option>
            </select>
          </div>
        )}
      </div>
      {isApp && (
        <div className="field">
          <label htmlFor={id("link")}>RESUME / PORTFOLIO LINK</label>
          <input
            id={id("link")}
            name="link"
            type="url"
            placeholder="Google Drive, LinkedIn or GitHub link"
            disabled={busy}
          />
        </div>
      )}
      <div className="field">
        <label htmlFor={id("message")}>{isApp ? "ABOUT YOU" : "MESSAGE *"}</label>
        <textarea
          id={id("message")}
          name="message"
          rows={4}
          required={!isApp}
          placeholder={isApp ? "Experience, skills, notice period…" : "What are you building?"}
          disabled={busy}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-solid" disabled={busy}>
        {busy ? "Sending…" : isApp ? "Submit application" : "Send message"}
      </button>
      <p className="form-status-wrap" aria-live="polite">
        {status === "ok" && (
          <span className="form-status ok">
            {isApp ? "Application received — we'll be in touch." : "Thanks — we'll get back to you within a day."}
          </span>
        )}
        {status === "err" && <span className="form-status err">{errorMsg}</span>}
      </p>
    </form>
  );
}
