import React, { useState } from 'react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    e.target.submit(); // submit form to hidden iframe
  };

  return (
    <div className="contact-section">
      {submitted ? (
        <>
          <h2 style={{ textAlign: 'center' }}>
            Το μήνυμά σας στάλθηκε με επιτυχία! ✅
          </h2>
          <div
            style={{ 
              color: 'green', 
              marginTop: '10px', 
              textAlign: 'center' 
            }}
            aria-live="polite"
          >
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Ένας εκπρόσωπος μας θα επικοινωνήσει μαζί σας το συντομότερο δυνατόν
          </p>
        </>
      ) : (
        <>
          <h2>Επικοινωνήστε μαζί μας</h2>
          <form
            id="contact-form"
            action="https://formsubmit.co/f1951716d8b48fd956a7ac1c461aea61"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Ονοματεπώνυμο</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ονοματεπώνυμο"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />

            <label htmlFor="message">Το μήνυμα σας</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Το μήνυμα σας"
              required
            ></textarea>

            {/* Honeypot and hidden fields */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value={window.location.href} />

            <button type="submit" id="submit-btn" disabled={submitting}>
              {submitting ? 'Αποστολή...' : 'Αποστολή'}
            </button>
          </form>
        </>
      )}

      <iframe
        name="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submitting) {
            setSubmitting(false);
            setSubmitted(true);
          }
        }}
        title="hidden_iframe"
      />
    </div>
  );
};

export default ContactUs;
