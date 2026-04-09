import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      {/* Ambient layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(16,185,129,0.18),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(52,211,153,0.2),transparent_40%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(5,150,105,0.12),transparent_45%)]"
      />
      <div
        aria-hidden
        className="noise-overlay pointer-events-none absolute inset-0 opacity-70 mix-blend-overlay"
      />

      <header className="relative z-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
          <div className="animate-fade-in flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-bold text-white shadow-lg shadow-emerald-900/20">
              H
            </span>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-700/90">
                Transport
              </p>
              <p className="text-sm font-bold tracking-tight text-emerald-950">
                Henry Taxi Safe Nicaragua
              </p>
            </div>
          </div>
          <div className="animate-fade-in flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-800/10 bg-white/60 px-4 py-2 text-xs font-medium text-emerald-800/90 shadow-sm backdrop-blur-md sm:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Nicaragua
            </div>
            <a
              href="https://wa.me/50582146285"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-800/10 bg-white/85 text-emerald-600 shadow-sm backdrop-blur-md transition hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <svg
                className="h-[22px] w-[22px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="mailto:taxinicaragua88@gmail.com"
              aria-label="Send email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-800/10 bg-white/85 text-emerald-700 shadow-sm backdrop-blur-md transition hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <svg
                className="h-[22px] w-[22px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <HeroCarousel />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pb-20 pt-8 sm:px-10 sm:pb-28 sm:pt-10">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="animate-fade-up animate-delay-100 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-sm">
              Premium Taxi Service
            </span>
            <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-emerald-950 sm:text-5xl">
              <span className="bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-600 bg-clip-text text-transparent">
                Henry Taxi Safe
              </span>
              <br />
              <span className="text-emerald-950/95">Nicaragua</span>
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-[color:var(--muted)] sm:text-xl">
              Welcome to the Nicaragua, the land of lakes and volcanoes. We will
              assist you all throughout Nicaragua.
            </p>
          </div>

          <ul className="animate-fade-up animate-delay-200 flex flex-wrap gap-3 text-sm font-medium text-emerald-900/85">
            {["Airport & hotel transfers", "City & day trips"].map((label) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-800/8 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {label}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up animate-delay-300 space-y-4">
            <div className="flex w-full min-w-0 flex-col gap-3 sm:gap-4">
              <a
                href="https://wa.me/50582146285"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full min-w-0 items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-6 py-4 text-center text-[0.95rem] font-semibold text-white shadow-xl shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-emerald-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/15 opacity-0 transition group-hover:opacity-100"
                />
                <svg
                  className="relative h-5 w-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="relative">WhatsApp (505) 8214-6285</span>
              </a>
              <a
                href="mailto:taxinicaragua88@gmail.com"
                className="flex w-full min-w-0 items-center justify-center gap-3 rounded-2xl border border-emerald-700/20 bg-white/90 px-6 py-4 text-center text-[0.95rem] font-semibold text-emerald-900 shadow-md shadow-emerald-900/5 backdrop-blur-sm transition hover:border-emerald-600/35 hover:bg-emerald-50/90 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="min-w-0 break-all sm:break-normal">
                  taxinicaragua88@gmail.com
                </span>
              </a>
            </div>
            <p className="animate-fade-up animate-delay-400 text-center text-sm text-emerald-800/65 sm:text-left">
              Message on WhatsApp for the fastest reply, or email anytime.
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-emerald-900/[0.06] bg-white/40 py-8 text-center text-xs text-emerald-800/55 backdrop-blur-sm">
        © {new Date().getFullYear()} Henry Taxi Safe Nicaragua
      </footer>
    </div>
  );
}
