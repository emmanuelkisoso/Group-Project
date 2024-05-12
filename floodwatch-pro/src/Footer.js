import "./Home.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="mx-auto">
              <h5>Contact Us</h5>
              <p>Email: info@floodwatch.com</p>
              <p>Phone: +1 (254) 456-7890</p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="mx-auto">
              <h5>Follow Us</h5>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://twitter.com/floodwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/floodwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/floodwatch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="copy">
                &copy; 2024 FloodWatch. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
