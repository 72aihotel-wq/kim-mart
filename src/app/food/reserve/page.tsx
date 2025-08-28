"use client";

import { useState } from "react";

export default function ReservePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setIsSubmitting(true);
    setMessage(null);
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          date: formData.get("date"),
          time: formData.get("time"),
          partySize: formData.get("partySize"),
          note: formData.get("note"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to submit");
      setMessage("Reservation requested. We will contact you to confirm.");
      (document.getElementById("reserve-form") as HTMLFormElement)?.reset();
    } catch (e: unknown) {
      const msg =
        typeof e === "object" && e !== null && "message" in e
          ? String((e as { message?: unknown }).message)
          : "Something went wrong";
      setMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Reserve a table</h1>
        <p className="mt-2 text-black/70 dark:text-white/70">
          Submit a request and our staff will confirm by phone or SMS.
        </p>
        <form id="reserve-form" action={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-1">
            <label className="text-sm">Full name</label>
            <input name="name" required className="rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Phone</label>
            <input name="phone" required className="rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label className="text-sm">Date</label>
              <input type="date" name="date" required className="rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" />
            </div>
            <div className="grid gap-1">
              <label className="text-sm">Time</label>
              <input type="time" name="time" required className="rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" />
            </div>
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Party size</label>
            <input type="number" min={1} max={20} name="partySize" required className="rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" />
          </div>
          <div className="grid gap-1">
            <label className="text-sm">Note (optional)</label>
            <textarea name="note" rows={3} className="rounded-lg border border-black/[.08] dark:border-white/[.145] bg-transparent px-3 py-2" />
          </div>
          <div className="flex items-center gap-3">
            <button disabled={isSubmitting} className="rounded-full bg-foreground text-background px-5 py-2 font-medium disabled:opacity-60">
              {isSubmitting ? "Submitting..." : "Submit request"}
            </button>
            {message && <span className="text-sm text-black/70 dark:text-white/70">{message}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}

