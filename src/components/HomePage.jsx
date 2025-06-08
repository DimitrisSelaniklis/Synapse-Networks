import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutUs from './AboutUs';
import Carousel from './Carousel';
import ContactUs from './ContactUs';



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
        
        {/* About Us Section */}
        <section>
          <AboutUs />
        </section>

        {/* Partners Section */}
        {/* <section className="partners-section">
          <h2>Οι Συνεργάτες μας</h2>
          <div className="logo-track-wrapper" aria-label="Partners logos scrolling">
            <div className="logo-track" aria-live="off" aria-atomic="true" role="list">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src="images/avax_logo.png" alt={`Partner ${i + 1}`} />
              ))}
            </div>
          </div>
        </section> */}

        {/* Carousel Section */}
        <section>
          <h2 className="section-header">Τα Έργα Μας</h2>
          <Carousel />
        </section>

        {/* Posts Section */}
        {/* <h2 className="section-header">Τα Έργα Μας</h2>
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
        </section> */}

        {/* Contact Section */}
        <section>
          <ContactUs />
        </section>

      </div>

      {/* Footer Section */}
      <footer id="footer-wrapper" className="py-4 mt-auto">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Synapse Networks ©</h2>
              <p>
                Έχετε ερωτήσεις ή χρειάζεστε λύσεις προσαρμοσμένες στις ανάγκες σας; 
								Επικοινωνήστε μαζί μας για να συζητήσουμε τις επιλογές σας και να κανονίσουμε ένα ραντεβού. 
								Είμαστε εδώ για να σας βοηθήσουμε να περάσετε στην επόμενη γενιά συνδεσιμότητας
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <h2>Επικοινωνήστε μαζί μας</h2>
              <div className="d-flex justify-content-md-end align-items-center gap-2">
                Email:
                <a href="mailto:info@synapse-networks.gr">
                  info@synapse-networks.gr
                </a>
              </div>
            </Col>

          </Row>
        </Container>
      </footer>

    </div>
  );
};

export default HomePage;
