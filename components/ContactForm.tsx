"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "err";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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

  return (
    <form className="contact-box" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">NAME</label>
        <input id="name" name="name" type="text" required disabled={status === "sending"} />
      </div>
      <div className="field">
        <label htmlFor="email">EMAIL</label>
        <input id="email" name="email" type="email" required disabled={status === "sending"} />
      </div>
      <div className="field">
        <label htmlFor="message">MESSAGE</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          disabled={status === "sending"}
        ></textarea>
      </div>
      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "ok" && (
        <p className="form-status ok">Thanks — we&apos;ll get back to you soon.</p>
      )}
      {status === "err" && <p className="form-status err">{errorMsg}</p>}
    </form>
  );
}
