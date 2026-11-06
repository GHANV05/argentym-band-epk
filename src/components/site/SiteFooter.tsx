import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

import { band, socials } from "@/data/epk";
import { navItems } from "./nav";

export function SiteFooter() {
  return (
    <footer className="grain border-t-4 border-primary bg-card/40 print:hidden">
      <div className="mx-auto grid max-w-content gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="wordmark text-6xl">{band.name}</p>
          <p className="max-w-sm text-muted-foreground">{band.tagline}</p>
          <a
            href={`mailto:${band.bookingEmail}`}
            className="inline-flex items-center gap-2 font-tech text-sm text-foreground hover:text-hot"
          >
            <Mail className="size-4" /> {band.bookingEmail}
          </a>
        </div>
        <div>
          <p className="eyebrow mb-4">Press kit</p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Follow</p>
          <ul className="space-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  {s.label}
                  <ArrowUpRight className="size-3.5 opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-2 px-5 py-5 font-tech text-xs text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {band.name}. {band.hometown}.
          </span>
          <span>Electronic Press Kit</span>
        </div>
      </div>
    </footer>
  );
}
