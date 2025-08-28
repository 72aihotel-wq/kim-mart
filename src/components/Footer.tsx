export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 md:px-16 lg:px-24 py-10 border-t border-black/[.08] dark:border-white/[.145] text-sm text-black/60 dark:text-white/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} KIM’S MART</span>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/kimsmartcorp/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="/food/reserve" className="hover:underline">Reserve</a>
          <a href="/visit" className="hover:underline">Visit</a>
        </div>
      </div>
    </footer>
  );
}

