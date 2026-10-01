"use client";
import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block w-full border border-charcoal/30 bg-white/60 px-4 py-3 text-base text-charcoal placeholder:text-taupe/70 focus:border-brown focus:bg-white";
const label = "block text-sm font-medium text-charcoal";

export function EstimateForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-charcoal/20 bg-white/50 p-8">
        <h3 className="text-3xl">Thank you.</h3>
        <p className="mt-3 text-charcoal/80">We received your request and will be in touch. If it&rsquo;s urgent, call <a className="underline" href={site.phoneHref}>{site.phone}</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={field} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={label}>Email <span className="font-normal text-taupe">(optional)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="projectType" className={label}>Project type</label>
          <select id="projectType" name="projectType" defaultValue="" className={field}>
            <option value="" disabled>Select one</option>
            {site.projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="address" className={label}>Project address</label>
        <input id="address" name="address" autoComplete="street-address" className={field} />
      </div>
      <div>
        <label htmlFor="message" className={label}>Tell us about your project</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center bg-brown px-7 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-brown-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Request an Estimate"}
      </button>
      <p role="alert" className="min-h-6 text-sm text-[#8a2f1d]">{status === "error" ? error : ""}</p>
    </form>
  );
}
