import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-black/[.08] dark:border-white/[.145]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          KIM’S MART
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link className="hover:underline" href="/">Home</Link>
          <a className="hover:underline" href="#products">Categories</a>
          <Link className="hover:underline" href="/visit">Visit</Link>
          <Link className="hover:underline" href="/food/reserve">Reserve</Link>
        </nav>
      </div>
    </header>
  );
}

