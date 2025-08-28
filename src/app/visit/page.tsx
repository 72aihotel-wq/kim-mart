export default function VisitPage() {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Visit KIM’S MART</h1>
        <p className="mt-3 text-black/70 dark:text-white/70">
          797 Mountain Rd, Moncton, NB — Find us on Google Maps and visit today.
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6">
            <h2 className="text-xl font-semibold">Hours</h2>
            <ul className="mt-3 space-y-1 text-sm">
              <li>Mon – Sat: 9:30 AM – 8:00 PM</li>
              <li>Sun: 11:00 AM – 6:00 PM</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="tel:+15063845077"
                className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium"
              >Call</a>
              <a
                href="https://www.google.com/maps/place/KIM%E2%80%99S+MART-Korean+Food%26Market/@46.1001144,-64.8069434,17z/data=!4m15!1m8!3m7!1s0x4ca0b8d0124c6261:0x920c5bbc6520439c!2s797+Mountain+Rd,+Moncton,+NB+E1C+1A4,+Canada!3b1!8m2!3d46.1001144!4d-64.8069434!16s%2Fg%2F11rp396nd8!3m5!1s0x4ca0b95c0bb69af5:0x66b69fe3e6fcf43a!8m2!3d46.1001144!4d-64.8069434!16s%2Fg%2F11hcjrml39?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
              >Directions</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-black/[.08] dark:border-white/[.145]">
            <iframe
              title="KIM’S MART Map"
              className="w-full h-[360px]"
              referrerPolicy="no-referrer-when-downgrade"
              loading="lazy"
              src="https://www.google.com/maps?q=KIM%E2%80%99S%20MART%2C%20797%20Mountain%20Rd%2C%20Moncton%2C%20NB&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

