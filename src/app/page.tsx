export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-24">
        <section className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-black/[.08] dark:border-white/[.145]">
            <picture>
              <source media="(min-width: 640px)" srcSet="https://ideogram.ai/assets/image/lossless/response/VfY1_xSfQYmpW98GfySQ0Q" />
              <img
                src="https://ideogram.ai/assets/image/lossless/response/NG5JDL_LTWGoAFvw7rVJgA"
                alt="KIM’S MART banner"
                className="w-full h-[380px] sm:h-[460px] object-cover"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
              <p className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs sm:text-sm mb-4">
                KIM’S MART • Korean Food & Market in Moncton
              </p>
              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-balance">
                Authentic Korean Groceries
              </h1>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90 max-w-2xl">
                Kimchi, ramen, snacks, frozen and drinks. New arrivals weekly.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm sm:text-base font-medium hover:opacity-90 transition shadow"
                >
                  Browse categories
                </a>
                <a
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 text-white px-5 py-3 text-sm sm:text-base font-medium hover:bg-white/10 transition"
                >
                  Visit & hours
                </a>
              </div>
            </div>
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
    </div>
  );
}
