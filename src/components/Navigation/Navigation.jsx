import logo from "../../assets/logo.svg";
import "./Navigation.css";

function Cta() {
  return (
    <main className="section-header">
      <header className="header">
        <a href="#">
          <img src={logo} className="logo" />
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              {" "}
              <a className="main-nav-link" href="#">
                How it Works
              </a>
            </li>
            <li>
              {" "}
              <a className="main-nav-link" href="#">
                Meals
              </a>
            </li>
            <li>
              {" "}
              <a className="main-nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li>
              {" "}
              <a className="main-nav-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              {" "}
              <a className="main-nav-link nav-cta" href="#">
                Try for free
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </main>
  );
}

export default Cta;
