import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-3xl", className)}>
      <p className="eyebrow mb-4 flex items-center gap-3 text-hot">
        <span className="hazard h-2.5 w-10 -skew-x-12" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-[0.95] font-black tracking-tight uppercase md:text-6xl">
        {title}
      </h2>
      {children && (
        <div className="mt-4 text-lg text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <section className="grain duotone relative overflow-hidden border-b-4 border-primary">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 size-full object-cover opacity-45"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div
        className="halftone absolute inset-y-0 right-0 -z-10 w-1/2 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]"
        aria-hidden
      />
      <div className="mx-auto max-w-content px-5 pt-20 pb-14 md:pt-28">
        <p className="mb-5 inline-block -rotate-2 bg-foreground px-3 py-1 font-tech text-xs font-bold tracking-[0.22em] text-background uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display text-6xl leading-[0.9] font-black tracking-tight uppercase [text-shadow:5px_5px_0_var(--primary)] md:text-8xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

/** Scrolling tape strip of shouted words, punk-flyer style. */
export function Marquee({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((t) => (
        <span key={t} className="flex items-center gap-6 px-6">
          <span className="font-display text-2xl font-black tracking-[0.08em] whitespace-nowrap uppercase md:text-3xl">
            {t}
          </span>
          <span className="text-xl" aria-hidden>
            ✕
          </span>
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={cn(
        "overflow-hidden border-y-2 border-foreground bg-primary py-3 text-primary-foreground",
        className,
      )}
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-content px-5", className)}>
      {children}
    </div>
  );
}
