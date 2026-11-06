import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { band } from '@/data/epk'

type State = 'idle' | 'pending' | 'success' | 'error'

const eventTypes = [
  'Club / headline show',
  'Support slot',
  'Festival',
  'Private event',
  'Other',
]

const selectClass =
  'h-9 w-full rounded-md border border-input bg-input/30 px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50'

export function BookingForm() {
  const [state, setState] = useState<State>('idle')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (state === 'pending') return
    const form = event.currentTarget
    const body = new URLSearchParams()
    new FormData(form).forEach((value, key) => body.append(key, String(value)))
    setState('pending')
    try {
      const response = await fetch('/booking-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error('Submission failed')
      if (/\bdata-netlify\s*=/i.test(await response.text())) {
        throw new Error('Form handling is unavailable')
      }
      form.reset()
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div role="status" className="flex flex-col items-start gap-4 border border-primary/50 bg-primary/10 p-8">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="font-display text-3xl font-black uppercase">Inquiry received</h3>
        <p className="text-muted-foreground">
          Thanks for reaching out. The Argentym team replies to booking inquiries within two business days.
          For anything urgent, email{' '}
          <a className="text-foreground underline" href={`mailto:${band.bookingEmail}`}>
            {band.bookingEmail}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setState('idle')}>
          Send another inquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      name="booking-inquiry"
      method="POST"
      action="/booking-form.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      onChange={() => {
        if (state === 'error') setState('idle')
      }}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="booking-inquiry" />
      <p hidden>
        <label>
          Leave empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <fieldset disabled={state === 'pending'} className="grid gap-5 sm:grid-cols-2">
        <legend className="sr-only">Booking details</legend>
        <Field id="name" label="Your name" required>
          <Input id="name" name="name" autoComplete="name" required maxLength={100} />
        </Field>
        <Field id="email" label="Email" required>
          <Input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
        </Field>
        <Field id="organization" label="Venue / promoter / company" required>
          <Input id="organization" name="organization" required maxLength={150} />
        </Field>
        <Field id="phone" label="Phone">
          <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} />
        </Field>
        <Field id="event_type" label="Type of booking" required>
          <select id="event_type" name="event_type" required defaultValue="" className={selectClass}>
            <option value="" disabled>
              Choose one
            </option>
            {eventTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field id="event_date" label="Proposed date">
          <Input id="event_date" name="event_date" type="date" className="[color-scheme:dark]" />
        </Field>
        <Field id="city" label="City" required>
          <Input id="city" name="city" required maxLength={100} />
        </Field>
        <Field id="capacity" label="Room capacity">
          <Input id="capacity" name="capacity" inputMode="numeric" maxLength={20} placeholder="e.g. 500" />
        </Field>
        <Field id="budget" label="Offer / budget" className="sm:col-span-2">
          <Input id="budget" name="budget" maxLength={100} placeholder="Guarantee, door deal, or range" />
        </Field>
        <Field id="message" label="Details" required className="sm:col-span-2">
          <Textarea
            id="message"
            name="message"
            required
            maxLength={3000}
            rows={5}
            placeholder="Bill, set length, load-in times, backline, anything else we should know."
          />
        </Field>
        <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
          <Button
            type="submit"
            size="lg"
            className="h-12 px-8 font-display text-base font-extrabold tracking-[0.14em] uppercase"
          >
            {state === 'pending' ? (
              <>
                <Loader2 className="animate-spin" /> Sending…
              </>
            ) : (
              'Send booking inquiry'
            )}
          </Button>
          <span className="font-tech text-xs text-muted-foreground">Replies within 2 business days</span>
        </div>
      </fieldset>
      {state === 'error' && (
        <p role="alert" className="border border-destructive/60 bg-destructive/10 p-4 text-sm">
          Your inquiry couldn’t be confirmed as sent. Your details are still here — please try again, or email{' '}
          <a className="underline" href={`mailto:${band.bookingEmail}`}>
            {band.bookingEmail}
          </a>{' '}
          directly.
        </p>
      )}
    </form>
  )
}

function Field({
  id,
  label,
  required,
  className,
  children,
}: {
  id: string
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`space-y-2 ${className ?? ''}`}>
      <Label htmlFor={id} className="font-tech text-xs tracking-[0.12em] text-muted-foreground uppercase">
        {label}
        {required && <span className="text-primary">*</span>}
      </Label>
      {children}
    </div>
  )
}
