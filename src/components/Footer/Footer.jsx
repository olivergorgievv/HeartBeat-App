import "./Footer.css";
import logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--5-cols">
        <div className="logo-col">
          <a href="#">
            <img src={logo} alt="" className="logo logo-footer" />
          </a>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; 2024 by FoodCreila, Inc. All rights reserved.
          </p>
        </div>
        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <a className="footer-link" href="tel:415-201-6370">
              415-201-6370
            </a>
            <br />
            <a className="footer-link" href="mailto:415-201-6370">
              contact@foodcreila.com
            </a>
          </address>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="">
                About FoodCreila
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                Cooking partners
              </a>
            </li>

            <li>
              <a className="footer-link" href="">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                Help Center
              </a>
            </li>
            <li>
              <a className="footer-link" href="">
                Privacy & Terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
