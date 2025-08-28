export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24">
        <section className="max-w-5xl mx-auto text-center sm:text-left">
          <p className="inline-block rounded-full border border-black/[.08] dark:border-white/[.145] px-3 py-1 text-xs sm:text-sm mb-5">
            KIM’S MART • Korean Food & Market in Moncton
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
            Authentic Korean Groceries. Come shop in-store today.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
            Explore ramen, kimchi, snacks, frozen items and more. Follow us on Facebook for the latest arrivals and promotions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition"
            >
              Browse featured products
            </a>
            <a
              href="/food/reserve"
              className="inline-flex items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.145] px-5 py-3 text-sm sm:text-base font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              Reserve a table (Food)
            </a>
          </div>
        </section>

        <section id="products" className="max-w-6xl mx-auto mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6">
              <h3 className="text-lg font-semibold">Kimchi & Banchan</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                House-made kimchi and Korean side dishes to elevate every meal.
              </p>
            </div>
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6">
              <h3 className="text-lg font-semibold">Ramen & Snacks</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                Popular Korean and Asian brands including Samyang, Buldak, and more.
              </p>
            </div>
            <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6">
              <h3 className="text-lg font-semibold">Frozen & Drinks</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                Freezer items and beverages perfect for quick meals and gatherings.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-5xl mx-auto mt-20 text-center sm:text-left">
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold">Visit us in-store</h2>
            <p className="mt-3 text-sm sm:text-base text-black/70 dark:text-white/70">
              797 Mountain Rd, Moncton, NB • Open daily. Follow us for updates and new arrivals.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href="https://www.google.com/maps/place/KIM%E2%80%99S+MART-Korean+Food%26Market/@46.1001144,-64.8069434,17z/data=!4m15!1m8!3m7!1s0x4ca0b8d0124c6261:0x920c5bbc6520439c!2s797+Mountain+Rd,+Moncton,+NB+E1C+1A4,+Canada!3b1!8m2!3d46.1001144!4d-64.8069434!16s%2Fg%2F11rp396nd8!3m5!1s0x4ca0b95c0bb69af5:0x66b69fe3e6fcf43a!8m2!3d46.1001144!4d-64.8069434!16s%2Fg%2F11hcjrml39?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition"
              >
                Open in Google Maps
              </a>
              <a
                href="https://www.facebook.com/kimsmartcorp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/[.08] dark:border-white/[.145] px-5 py-3 text-sm sm:text-base font-medium hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 sm:px-10 md:px-16 lg:px-24 py-10 border-t border-black/[.08] dark:border-white/[.145] text-sm text-black/60 dark:text-white/60">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} KIM’S MART</span>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/kimsmartcorp/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://www.google.com/maps/place/KIM%E2%80%99S+MART-Korean+Food%26Market/@46.1001144,-64.8069434,17z/data=!4m15!1m8!3m7!1s0x4ca0b8d0124c6261:0x920c5bbc6520439c!2s797+Mountain+Rd,+Moncton,+NB+E1C+1A4,+Canada!3b1!8m2!3d46.1001144!4d-64.8069434!16s%2Fg%2F11rp396nd8!3m5!1s0x4ca0b95c0bb69af5:0x66b69fe3e6fcf43a!8m2!3d46.1001144!4d-64.8069434!16s%2Fg%2F11hcjrml39?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Maps</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
