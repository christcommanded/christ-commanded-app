import React, { useMemo, useState } from 'react';
import type { ContactReason } from '../../data/membership';

type FormState = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

type FormStatus = 'idle' | 'success' | 'error';

interface ContactFormProps {
  reasons: ContactReason[];
  contactEmail: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  reason: '',
  message: '',
};

const ContactForm: React.FC<ContactFormProps> = ({ reasons, contactEmail }) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const reasonOptions = useMemo(() => reasons.filter(Boolean), [reasons]);

  const updateField = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus('idle');
    setStatusMessage('');
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formState.name.trim()) {
      nextErrors.name = 'Please tell us your name.';
    } else if (formState.name.trim().length < 2) {
      nextErrors.name = 'Name must be at least two characters long.';
    }

    if (!formState.email.trim()) {
      nextErrors.email = 'Email is required so we can follow up.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!formState.reason) {
      nextErrors.reason = 'Choose the reason that best fits your request.';
    }

    if (!formState.message.trim()) {
      nextErrors.message = 'Let us know how we can serve you.';
    } else if (formState.message.trim().length < 10) {
      nextErrors.message = 'Message should be at least 10 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formState, submittedAt: new Date().toISOString() }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      setStatusMessage(
        'Thanks for reaching out! A member of our team will connect with you within two business days.',
      );
      setFormState(initialState);
    } catch (error) {
      console.error('Contact form submission failed', error);
      setStatus('error');
      setStatusMessage(
        `We could not send your request right now. Please email us directly at ${contactEmail} or try again soon.`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="membership-section" aria-labelledby="membership-contact-heading">
      <div className="section-header">
        <h2 id="membership-contact-heading" className="section-heading">
          Contact the Membership Team
        </h2>
        <p className="section-description">
          Ready to take the next step or have a question? Use the form below and our team will reach
          out shortly.
        </p>
      </div>

      <form className="membership-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="membership-name">Name</label>
            <input
              id="membership-name"
              name="name"
              type="text"
              autoComplete="name"
              value={formState.name}
              onChange={updateField('name')}
              aria-describedby={errors.name ? 'membership-name-error' : undefined}
              required
            />
            {errors.name ? (
              <p id="membership-name-error" className="form-error">
                {errors.name}
              </p>
            ) : null}
          </div>

          <div className="form-field">
            <label htmlFor="membership-email">Email</label>
            <input
              id="membership-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formState.email}
              onChange={updateField('email')}
              aria-describedby={errors.email ? 'membership-email-error' : undefined}
              required
            />
            {errors.email ? (
              <p id="membership-email-error" className="form-error">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="membership-reason">How can we help?</label>
          <select
            id="membership-reason"
            name="reason"
            value={formState.reason}
            onChange={updateField('reason')}
            aria-describedby={errors.reason ? 'membership-reason-error' : undefined}
            required
          >
            <option value="">Select a reason</option>
            {reasonOptions.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>
          {errors.reason ? (
            <p id="membership-reason-error" className="form-error">
              {errors.reason}
            </p>
          ) : null}
          <ul className="form-helper" role="list">
            {reasonOptions.map((reason) => (
              <li key={`${reason.value}-helper`}>
                <strong>{reason.label}:</strong> {reason.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="form-field">
          <label htmlFor="membership-message">Message</label>
          <textarea
            id="membership-message"
            name="message"
            rows={5}
            value={formState.message}
            onChange={updateField('message')}
            aria-describedby={errors.message ? 'membership-message-error' : undefined}
            required
          />
          {errors.message ? (
            <p id="membership-message-error" className="form-error">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="form-actions">
          <button type="submit" className="cta-link" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
        </div>

        {status !== 'idle' ? (
          <div
            className={`form-status form-status--${status}`}
            role={status === 'success' ? 'status' : 'alert'}
            aria-live={status === 'success' ? 'polite' : 'assertive'}
          >
            {statusMessage}
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default ContactForm;
