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
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default Cta;
