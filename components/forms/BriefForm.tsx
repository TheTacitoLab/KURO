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
  'w-full bg-transparent border-b border-[#DDDDDD] py-3 type-body text-[#111111] placeholder:text-[#DDDDDD] focus:outline-none focus:border-[#111111] transition-colors duration-150'

const labelBase = 'type-label text-[#777777] block mb-2'

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
      // Form submission endpoint — wire to Formspree, Resend, or API route via env variable
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
        className="py-16 border-t border-[#DDDDDD]"
      >
        <p className="type-chapter text-[#111111] mb-4">Received.</p>
        <p className="type-body text-[#777777] max-w-sm">
          KURO will reply within two working days.
        </p>
        <p className="type-body text-[#777777] max-w-sm mt-2">
          If the event is time-sensitive, email{' '}
          <a
            href="mailto:hello@deptkuro.com"
            className="text-[#111111] underline underline-offset-4 hover:text-[#4A4A4A]"
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
            className={cx(inputBase, errors.name && 'border-[#111111]')}
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
            aria-describedby={errors.name ? 'error-name' : undefined}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p id="error-name" className="type-label text-[#111111] mt-2" role="alert">
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
            className={cx(inputBase, errors.email && 'border-[#111111]')}
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
            aria-describedby={errors.email ? 'error-email' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="error-email" className="type-label text-[#111111] mt-2" role="alert">
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
            className={cx(inputBase, errors.event && 'border-[#111111]')}
            value={data.event}
            onChange={(e) => update('event', e.target.value)}
            aria-describedby={errors.event ? 'error-event' : undefined}
            aria-invalid={!!errors.event}
          />
          {errors.event && (
            <p id="error-event" className="type-label text-[#111111] mt-2" role="alert">
              {errors.event}
            </p>
          )}
        </div>

        {/* Volume */}
        <div>
          <fieldset>
            <legend className={cx(labelBase, 'mb-4')}>
              Approximate volume <span aria-label="required">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {volumeOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={cx(
                    'border py-3 px-4 type-label cursor-pointer transition-colors',
                    data.volume === opt.value
                      ? 'border-[#111111] bg-[#111111] text-[#FAFAFA]'
                      : 'border-[#DDDDDD] text-[#4A4A4A] hover:border-[#111111]'
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
              <p className="type-label text-[#111111] mt-2" role="alert">
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
          <p className="type-body text-[#111111]">
            Something went wrong. Try again, or email{' '}
            <a
              href="mailto:hello@deptkuro.com"
              className="underline underline-offset-4 hover:text-[#4A4A4A]"
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
