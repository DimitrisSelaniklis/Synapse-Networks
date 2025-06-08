import React, { useState } from 'react';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div className="contact-section">
      <h2>Επικοινωνήστε μαζί μας</h2>

      {submitted ? (
        <div style={{ color: 'green', marginTop: '10px' }}>
          ✅ Το μήνυμά σας στάλθηκε με επιτυχία!
        </div>
      ) : (
        <form
          id="contact-form"
          action="https://formsubmit.co/info@synapse-networks.gr"
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Ονοματεπώνυμο" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="5" placeholder="Το μήνυμα σας" required></textarea>

          {/* Honeypot and hidden fields */}
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value={window.location.href} />

          <button type="submit" id="submit-btn">Αποστολή</button>
        </form>
      )}

      {/* Hidden iframe to prevent redirect */}
      <iframe
        name="hidden_iframe"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submitted) setSubmitted(true);
        }}
      />
    </div>
  );
};

export default ContactUs;
