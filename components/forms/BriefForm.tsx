'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Rule } from '@/components/ui/Rule'
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
  { value: '1000-5000', label: '1,000 to 5,000' },
  { value: '5000-25000', label: '5,000 to 25,000' },
  { value: '25000-plus', label: '25,000+' },
]

const inputBase =
  'w-full bg-transparent border-b border-ash py-4 type-body text-white placeholder:text-ash focus:outline-none focus:border-white transition-colors duration-200'

const labelBase = 'type-label text-mute block mb-3'

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
      // Wire to Formspree, Resend, or API route via NEXT_PUBLIC_FORM_ENDPOINT
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
      <div role="status" aria-live="polite" className="py-12 border-t border-ash">
        <p className="type-chapter text-white mb-5">Received.</p>
        <p className="type-body text-mute mb-3">
          KURO will reply within two working days.
        </p>
        <p className="type-body text-mute">
          If the event is time-sensitive, email{' '}
          <a
            href="mailto:hello@deptkuro.com"
            className="text-white underline underline-offset-4 hover:text-hair transition-colors"
          >
            hello@deptkuro.com
          </a>{' '}
          directly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Start a brief">
      <Rule weight="hair" className="mb-10" />

      <div className="space-y-10">
        {/* Name */}
        <div>
          <label htmlFor="brief-name" className={labelBase}>
            Your name <span aria-label="required">*</span>
          </label>
          <input
            id="brief-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            className={cx(inputBase, errors.name && 'border-white')}
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="error-name" className="type-label text-white mt-2" role="alert">
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
            Email <span aria-label="required">*</span>
          </label>
          <input
            id="brief-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className={cx(inputBase, errors.email && 'border-white')}
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="error-email" className="type-label text-white mt-2" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Event or brand */}
        <div>
          <label htmlFor="brief-event" className={labelBase}>
            Event or brand <span aria-label="required">*</span>
          </label>
          <input
            id="brief-event"
            type="text"
            name="event"
            className={cx(inputBase, errors.event && 'border-white')}
            value={data.event}
            onChange={(e) => update('event', e.target.value)}
            aria-describedby={errors.event ? 'error-event' : undefined}
            aria-invalid={!!errors.event}
          />
          {errors.event && (
            <p id="error-event" className="type-label text-white mt-2" role="alert">
              {errors.event}
            </p>
          )}
        </div>

        {/* Volume */}
        <div>
          <fieldset>
            <legend className={cx(labelBase, 'mb-5')}>
              Approximate volume <span aria-label="required">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {volumeOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={cx(
                    'border py-4 px-4 type-label cursor-pointer transition-all duration-200',
                    data.volume === opt.value
                      ? 'border-white bg-white text-ink'
                      : 'border-ash text-mute hover:border-mute hover:text-white'
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
              <p className="type-label text-white mt-3" role="alert">
                {errors.volume}
              </p>
            )}
          </fieldset>
        </div>

        {/* Target date */}
        <div>
          <label htmlFor="brief-date" className={labelBase}>
            Target event date
          </label>
          <input
            id="brief-date"
            type="text"
            name="date"
            placeholder="Month / Year"
            className={inputBase}
            value={data.date}
            onChange={(e) => update('date', e.target.value)}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="brief-message" className={labelBase}>
            Anything else KURO should know
          </label>
          <textarea
            id="brief-message"
            name="message"
            rows={5}
            className={cx(inputBase, 'resize-none')}
            value={data.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>
      </div>

      <Rule weight="hair" className="my-10" />

      {status === 'error' && (
        <div role="alert" aria-live="assertive" className="mb-6">
          <p className="type-body text-white">
            Something went wrong. Try again, or email{' '}
            <a
              href="mailto:hello@deptkuro.com"
              className="underline underline-offset-4 hover:text-hair transition-colors"
            >
              hello@deptkuro.com
            </a>
            .
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === 'submitting'}
        className="min-w-[160px]"
      >
        {status === 'submitting' ? 'Sending...' : 'Send brief'}
      </Button>
    </form>
  )
}
