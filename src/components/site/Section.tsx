import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('mb-10 max-w-3xl', className)}>
      <p className="eyebrow mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-black tracking-tight uppercase md:text-6xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-lg text-muted-foreground">{children}</div>}
    </div>
  )
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string
  title: string
  intro?: string
  image?: string
}) {
  return (
    <section className="grain relative overflow-hidden border-b border-border">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 -z-10 size-full object-cover opacity-30"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="mx-auto max-w-content px-5 pt-20 pb-14 md:pt-28">
        <p className="eyebrow mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="font-display text-6xl leading-[0.9] font-black tracking-tight uppercase md:text-8xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</p>}
      </div>
    </section>
  )
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto max-w-content px-5', className)}>{children}</div>
}
