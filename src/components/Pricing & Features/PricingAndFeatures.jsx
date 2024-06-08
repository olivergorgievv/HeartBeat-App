import "./PricingAndFeatures.css";

function PricingAndFeatures() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading"> Pricing </span>
        <h2 className="heading-secondary">
          Start a 14-day free trial. No credit card required.
        </h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-sm">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>40
            </p>
            <p className="plan-text">Save $9/month</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Up to 1000 Members</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Discussions</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Events</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Payments</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Documents</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon-red" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full">
              Start for free
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Growth</p>
            <p className="plan-price">
              <span>$</span>108
            </p>
            <p className="plan-text">Save $21/month</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>
                <strong>Unlimited </strong>Members
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>
                Lower <strong>Fees</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>White-labeling</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>API Access</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Conversion Tracking</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>1:1 Onboarding</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full">
              Start for free
            </a>
          </div>
        </div>
      </div>
      <div className="container grid">
        <aside className="helper-text">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>
      <div className="container grid grid--4-cols">
        <div className="feature">
          <ion-icon class="feature-icon" name="people-outline"></ion-icon>
          <p className="feature-title">Engage members</p>
          <p className="feature-text">
            Bring conversations, content, events, courses, and more under 1 roof
            to engage
          </p>
        </div>
        <div className="feature">
          <ion-icon class="feature-icon" name="wallet-outline"></ion-icon>
          <p className="feature-title">Collect payment</p>
          <p className="feature-text">
            Set up paid tiers, upsells, payment pages, & a full paid affiliate
            program
          </p>
        </div>
        <div className="feature">
          <ion-icon class="feature-icon" name="attach-outline"></ion-icon>
          <p className="feature-title">Customize infinitely</p>
          <p className="feature-text">
            Completely tailor your community experience for different membership
            types
          </p>
        </div>
        <div className="feature">
          <ion-icon class="feature-icon" name="link-outline"></ion-icon>
          <p className="feature-title">Expert tutorials</p>
          <p className="feature-text">
            Video tours of successful Heartbeat communities, led by their
            creators.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingAndFeatures;
