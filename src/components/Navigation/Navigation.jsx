import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Navigation.css";

function Cta() {
  const [isOpen, setIsOpen] = useState("");
  // const [userHasScrolled, setUserHasScrolled] = useState(false);

  // window.onscroll = function (e) {
  //   setTimeout(() => {
  //     setUserHasScrolled(true);
  //   }, 1000);
  // };

  return (
    <main className={`section-header sticky`}>
      <header className={`header ${isOpen} `}>
        <a href="#">
          <img src={logo} className="logo" alt="Logo" />
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#how">
                How it Works
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#meals">
                Features
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="main-nav-link nav-cta" href="#cta">
                Try for free
              </a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            setIsOpen(isOpen === "" ? "nav-open" : "");
          }}
          className="btn-mobile-nav"
        >
          <span className="icon-container">
            <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
            {isOpen === "nav-open" && (
              <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
            )}
          </span>
        </button>
      </header>
    </main>
  );
}

export default Cta;
