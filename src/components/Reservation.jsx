import { useState } from 'react';
import styles from './Reservation.module.css';

const initialState = {
  name: '',
  email: '',
  phone: '',
  guests: '2',
  date: '',
  time: '19:00'
};

export default function Reservation() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your full name.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Enter a valid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Enter your phone number.';
    if (!form.date) newErrors.date = 'Select a reservation date.';
    if (!form.time) newErrors.time = 'Select a preferred time.';
    if (!form.guests || Number(form.guests) < 1) newErrors.guests = 'Choose number of guests.';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="reservation" className={`${styles.reservation} section`}>
      <div className={styles.headingRow}>
        <span className={styles.sectionTag}>Reserve your table</span>
        <h2>Book a memorable evening.</h2>
      </div>

      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.rowGroup}>
            <label htmlFor="reservation-name">
              Full Name
            </label>
            <div className={styles.fieldGroup}>
              <input
                id="reservation-name"
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'reservation-name-error' : undefined}
              />
              {errors.name && <small id="reservation-name-error">{errors.name}</small>}
            </div>

            <label htmlFor="reservation-email">
              Email
            </label>
            <div className={styles.fieldGroup}>
              <input
                id="reservation-email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="hello@example.com"
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'reservation-email-error' : undefined}
              />
              {errors.email && <small id="reservation-email-error">{errors.email}</small>}
            </div>
          </div>

          <div className={styles.rowGroup}>
            <label htmlFor="reservation-phone">
              Phone Number
            </label>
            <div className={styles.fieldGroup}>
              <input
                id="reservation-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="0917 123 4567"
                aria-required="true"
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'reservation-phone-error' : undefined}
              />
              {errors.phone && <small id="reservation-phone-error">{errors.phone}</small>}
            </div>

            <label htmlFor="reservation-guests">
              Guests
            </label>
            <div className={styles.fieldGroup}>
              <select
                id="reservation-guests"
                name="guests"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                aria-required="true"
                aria-invalid={errors.guests ? 'true' : 'false'}
                aria-describedby={errors.guests ? 'reservation-guests-error' : undefined}
              >
                {[...Array(10).keys()].map((index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1} Guests
                  </option>
                ))}
              </select>
              {errors.guests && <small id="reservation-guests-error">{errors.guests}</small>}
            </div>
          </div>

          <div className={styles.rowGroup}>
            <label htmlFor="reservation-date">
              Date
            </label>
            <div className={styles.fieldGroup}>
              <input
                id="reservation-date"
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                aria-required="true"
                aria-invalid={errors.date ? 'true' : 'false'}
                aria-describedby={errors.date ? 'reservation-date-error' : undefined}
              />
              {errors.date && <small id="reservation-date-error">{errors.date}</small>}
            </div>

            <label htmlFor="reservation-time">
              Time
            </label>
            <div className={styles.fieldGroup}>
              <input
                id="reservation-time"
                type="time"
                name="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                aria-required="true"
                aria-invalid={errors.time ? 'true' : 'false'}
                aria-describedby={errors.time ? 'reservation-time-error' : undefined}
              />
              {errors.time && <small id="reservation-time-error">{errors.time}</small>}
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Reserve Now
          </button>

          {submitted && (
            <p className={styles.successMessage} role="status" aria-live="polite">
              Your reservation request has been received. We will confirm shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
