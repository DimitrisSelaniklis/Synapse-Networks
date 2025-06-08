import React from 'react';

const AboutUs = () => {
  return (
    <div id="main-wrapper">
      <div className="wrapper style1">
        <div className="inner">
          {/* Centered Section Header */}
          <h2 className="section-header centered-title">Σχετικά με εμάς</h2>

          <section className="about-section">
            {/* Image */}
            <img
              className="about-image"
              src="images/optiki_ina_3.jpg"
              alt="Synapse Networks - Optical Fiber Installation"
            />

            {/* Text */}
            <div className="about-text">
              <p>
                Η <strong>Synapse Networks Ο.Ε.</strong> είναι μια δυναμική εταιρεία με εξειδίκευση στον χώρο των τηλεπικοινωνιών και της πληροφορικής. Παρέχουμε ολοκληρωμένες λύσεις δικτύωσης, από τη μελέτη έως και την πλήρη υλοποίηση, προσφέροντας υποδομές υψηλής αξιοπιστίας.
              </p>

              <h4>Τι κάνουμε</h4>
              <p>Αναλαμβάνουμε κάθε έργο με επαγγελματισμό και τεχνογνωσία:</p>
              <ul>
                <li>Μελέτη και σχεδιασμός τηλεπικοινωνιακών υποδομών</li>
                <li>Εξειδικευμένες τεχνικές προτάσεις προσαρμοσμένες στις ανάγκες σας</li>
                <li>Πιστοποιημένη εγκατάσταση με χρήση επαγγελματικού εξοπλισμού</li>
              </ul>

              <h4>Εξειδίκευση σε Δίκτυα</h4>
              <ul>
                <li><strong>Οπτικές ίνες:</strong> FTTH, backbone, τερματισμοί, συγκολλήσεις</li>
                <li><strong>Δίκτυα χαλκού:</strong> Δομημένη καλωδίωση, τηλεφωνία, legacy υποδομές</li>
                <li><strong>LAN:</strong> Τοπικά δίκτυα για επιχειρήσεις, ξενοδοχεία και κατοικίες</li>
              </ul>

              <p>
                Η ομάδα μας αποτελείται από έμπειρους και πιστοποιημένους τεχνικούς με πολυετή εμπειρία σε επιχειρηματικούς και ξενοδοχειακούς χώρους, καθώς και σε έργα παρόχων.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
