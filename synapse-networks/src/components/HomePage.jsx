import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from './Carousel';



const HomePage = () => {
  return (
    <div className="homepage is-preload" id="page-wrapper">
      {/* Header Wrapper */}
      <div id="header-wrapper">
        <div className="container">
          {/* Banner */}
          <div id="banner">
            <img
              src="images/logo_2.jpg"
              alt="Logo"
              style={{ width: '30%', display: 'block', margin: 'auto' }}
            />
            <br />
            <h2 style={{ color: '#1b2f55' }}>
              <strong>Synapse - Networks</strong>
              <br />
              <div style={{ fontSize: 'large' }}>Intelligent Connectivity</div>
            </h2>
          </div>
        </div>
      </div>

      {/* Main Wrapper */}
      <div id="main-wrapper">
        <div className="wrapper style1">
          <div className="inner">
            <section className="container box feature1">
              <div className="row">
                <div className="col-12">
                  <header className="first major">
                     <h2 className="section-header">Σχετικά με εμάς</h2> {/* <-- Added Header */}
                    <p>
                      Η <b>Synapse Networks Ο.Ε.</b> είναι μια δυναμική εταιρεία με μεγάλη τεχνογνωσία στον χώρο των τηλεπικοινωνιών και της πληροφορικής, που παρέχει ολοκληρωμένες λύσεις δικτύωσης, από τη μελέτη έως και την πλήρη υλοποίηση.
                    </p>
                    <p>
                      Ειδικευόμαστε στην εγκατάσταση δικτύων οπτικών ινών υψηλής ταχύτητας προσφέροντας γρήγορη και αξιόπιστη συνδεσιμότητα. Διαθέτουμε βαθιά εξειδίκευση σε κάθε τύπο ενσύρματου δικτύου, με έμφαση σε:
                      <b> oπτικές ίνες</b> (FTTH, backbone, τερματισμοί και συγκολλήσεις), <b>δίκτυα χαλκού</b> (δομημένη καλωδίωση, τηλεφωνία, legacy υποδομές), <b>τοπικά δίκτυα (LAN)</b> για επιχειρήσεις, επαγγελματικούς χώρους και κατοικίες.
                    </p>
                    <p>
                      Η ομάδα μας αποτελείται από έμπειρους τεχνικούς και πιστοποιημένους επαγγελματίες, με έργα σε ξενοδοχειακές μονάδες, επιχειρήσεις, κτιριακές υποδομές και δίκτυα παρόχων. Εστιάζουμε στην αξιοπιστία, την ακρίβεια και τη συνέπεια, προσφέροντας δικτυακές λύσεις υψηλών απαιτήσεων, έτοιμες να υποστηρίξουν τις ανάγκες του σήμερα και του μέλλοντος.
                    </p>
                    <ul>
                      <li>Μελέτες και σχεδιασμό υποδομών</li>
                      <li>Τεχνικές προτάσεις προσαρμοσμένες στις ανάγκες του πελάτη</li>
                      <li>Υλοποίηση και πιστοποίηση εγκαταστάσεων με επαγγελματικό εξοπλισμό και αυστηρή τήρηση τεχνικών προτύπων</li>
                    </ul>
                  </header>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Partners Section */}
        <section className="partners-section">
          <h2>Οι Συνεργάτες μας</h2>
          <div className="logo-track-wrapper" aria-label="Partners logos scrolling">
            <div className="logo-track" aria-live="off" aria-atomic="true" role="list">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src="images/avax_logo.png" alt={`Partner ${i + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-header">Τα Έργα Μας</h2>
          <Carousel />
        </section>

        {/* Posts Section */}
        <h2 className="section-header">Τα Έργα Μας</h2>
        <section className="posts-section">
          <div className="post">
            <img src="images/rack_final.jpg" alt="Post 1" />
            <p>Short description for post one.</p>
            <button>Learn More</button>
          </div>
          <div className="post">
            <img src="https://via.placeholder.com/300x200" alt="Post 2" />
            <p>Short description for post two.</p>
            <button>Learn More</button>
          </div>
          <div className="post">
            <img src="https://via.placeholder.com/300x200" alt="Post 3" />
            <p>Short description for post three.</p>
            <button>Learn More</button>
          </div>
        </section>

        {/* Contact Section */}
        <div className="contact-section">
          <h2>Επικοινωνήστε μαζί μας</h2>
          <form id="contact-form">
            <input type="text" name="name" placeholder="Ονοματεπώνυμο" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="5" placeholder="Το μήνυμα σας" required></textarea>

            {/* Honeypot and hidden fields */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />

            <button type="submit" id="submit-btn">Αποστολη</button>
          </form>

          <div id="status-message" style={{ color: 'green', marginTop: '10px', display: 'none' }}>
            Το μήνυμα σας στάλθηκε με επιτυχία!
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
