'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cx } from '@/lib/utils'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  role: string
  email: string
  event: string
  volume: string
  date: string
  message: string
}

const volumeOptions = [
  { value: 'under-1000', label: 'Under 1,000' },
  { value: '1000-5000', label: '1,000 – 5,000' },
  { value: '5000-25000', label: '5,000 – 25,000' },
  { value: '25000-plus', label: '25,000+' },
]

const inputBase =
  'w-full bg-bone border border-ink/15 rounded-xl px-4 py-3.5 type-body text-ink placeholder:text-dust focus:outline-none focus:border-ink focus:ring-2 focus:ring-sun/50 transition'

const labelBase = 'type-label text-smoke block mb-2'

export function BriefForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [data, setData] = useState<FormData>({
    name: '',
    role: '',
    email: '',
    event: '',
    volume: '',
    date: '',
    message: '',
  })

  function validate(): boolean {
    const next: Partial<FormData> = {}
    if (!data.name.trim()) next.name = 'Name is required.'
    if (!data.email.trim()) {
      next.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = 'A valid email is required.'
    }
    if (!data.event.trim()) next.event = 'Event or brand is required.'
    if (!data.volume) next.volume = 'Approximate volume is required.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/brief'
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl bg-sun text-ink p-8 md:p-12 tex-grain relative overflow-hidden"
      >
        <p className="type-tag mb-4">RECEIVED ✶</p>
        <p className="type-display mb-4">Thanks.</p>
        <p className="type-lede mb-4 max-w-md">
          KURO will reply within two working days.
        </p>
        <p className="type-body opacity-80 max-w-md">
          If the event is time-sensitive, email{' '}
          <a
            href="mailto:hello@deptkuro.com"
            className="underline underline-offset-4 font-semibold hover:text-ember transition-colors"
          >
            hello@deptkuro.com
          </a>{' '}
          directly.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Start a brief"
      className="bg-bone rounded-3xl border border-ink/10 p-6 md:p-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Name */}
        <div>
          <label htmlFor="brief-name" className={labelBase}>
            Your name <span aria-label="required" className="text-coral">*</span>
          </label>
          <input
            id="brief-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            className={cx(inputBase, errors.name && 'border-coral focus:border-coral')}
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="error-name" className="type-label text-coral mt-2" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Role */}
        <div>
          <label htmlFor="brief-role" className={labelBase}>
            Your role
          </label>
          <input
            id="brief-role"
            type="text"
            name="role"
            autoComplete="organization-title"
            className={inputBase}
            value={data.role}
            onChange={(e) => update('role', e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="brief-email" className={labelBase}>
            Email <span aria-label="required" className="text-coral">*</span>
          </label>
          <input
            id="brief-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className={cx(inputBase, errors.email && 'border-coral focus:border-coral')}
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="error-email" className="type-label text-coral mt-2" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Event */}
        <div>
          <label htmlFor="brief-event" className={labelBase}>
            Event or brand <span aria-label="required" className="text-coral">*</span>
          </label>
          <input
            id="brief-event"
            type="text"
            name="event"
            className={cx(inputBase, errors.event && 'border-coral focus:border-coral')}
            value={data.event}
            onChange={(e) => update('event', e.target.value)}
            aria-describedby={errors.event ? 'error-event' : undefined}
            aria-invalid={!!errors.event}
          />
          {errors.event && (
            <p id="error-event" className="type-label text-coral mt-2" role="alert">
              {errors.event}
            </p>
          )}
        </div>

        {/* Volume */}
        <div className="md:col-span-2">
          <fieldset>
            <legend className={cx(labelBase, 'mb-3')}>
              Approximate volume <span aria-label="required" className="text-coral">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {volumeOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={cx(
                    'border rounded-full py-3 px-4 type-label cursor-pointer text-center transition-all',
                    data.volume === opt.value
                      ? 'border-ink bg-ink text-cream'
                      : 'border-ink/20 text-smoke hover:border-ink hover:text-ink'
                  )}
                >
                  <input
                    type="radio"
                    name="volume"
                    value={opt.value}
                    className="sr-only"
                    checked={data.volume === opt.value}
                    onChange={(e) => update('volume', e.target.value)}
                    required
                  />
                  {opt.label}
                </label>
              ))}
            </div>
            {errors.volume && (
              <p className="type-label text-coral mt-3" role="alert">
                {errors.volume}
              </p>
            )}
          </fieldset>
        </div>

        {/* Target date */}
        <div className="md:col-span-2">
          <label htmlFor="brief-date" className={labelBase}>
            Target event date
          </label>
          <input
            id="brief-date"
            type="text"
            name="date"
            placeholder="e.g. June 2026"
            className={inputBase}
            value={data.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="brief-message" className={labelBase}>
            Anything else KURO should know
          </label>
          <textarea
            id="brief-message"
            name="message"
            rows={5}
            placeholder="Vibe, references, dates, where the jersey lives in the weekend…"
            className={cx(inputBase, 'resize-y min-h-[140px]')}
            value={data.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>
      </div>

      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-8 rounded-2xl bg-coral/10 border border-coral text-ink p-4"
        >
          <p className="type-body">
            Something went wrong. Try again, or email{' '}
            <a
              href="mailto:hello@deptkuro.com"
              className="underline underline-offset-4 font-semibold"
            >
              hello@deptkuro.com
            </a>
            .
          </p>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
        <p className="type-tag text-smoke">REPLY WITHIN TWO WORKING DAYS</p>
        <Button
          type="submit"
          variant="coral"
          size="lg"
          disabled={status === 'submitting'}
          className="min-w-[180px]"
        >
          {status === 'submitting' ? 'Sending…' : 'Send brief'}
          <span aria-hidden="true">→</span>
        </Button>
      </div>
    </form>
  )
}
