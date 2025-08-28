"use client";

import { useEffect, useState } from "react";

export default function PromoBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissedAt = localStorage.getItem("promoDismissedAt");
      if (!dismissedAt) {
        setIsOpen(true);
      }
    } catch {}
  }, []);

  function dismiss() {
    try {
      localStorage.setItem("promoDismissedAt", new Date().toISOString());
    } catch {}
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-background/95 backdrop-blur p-4 sm:p-5 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-sm sm:text-base font-medium">Welcome Promo</p>
            <p className="mt-1 text-xs sm:text-sm text-black/70 dark:text-white/70">
              Enjoy special deals in-store this week. Ask staff for details!
            </p>
          </div>
          <button
            onClick={dismiss}
            className="shrink-0 rounded-full border border-black/[.08] dark:border-white/[.145] px-3 py-1 text-xs sm:text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

