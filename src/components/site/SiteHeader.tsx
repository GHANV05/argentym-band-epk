import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { band } from "@/data/epk";
import { navItems } from "./nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-primary bg-background/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-5">
        <Link
          to="/"
          className="wordmark text-3xl"
          aria-label={`${band.name} home`}
        >
          {band.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-3 py-2 font-display text-sm font-bold tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-primary data-[status=active]:text-hot-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="punk-shadow rounded-none border-2 border-foreground font-display text-sm font-extrabold tracking-[0.14em] uppercase"
          >
            <Link to="/shows" hash="booking">
              Book the Band
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background p-6">
              <SheetTitle className="wordmark text-4xl">{band.name}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3 font-display text-xl font-bold tracking-[0.1em] uppercase text-muted-foreground data-[status=active]:text-hot"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
