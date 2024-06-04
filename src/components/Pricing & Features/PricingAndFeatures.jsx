import "./PricingAndFeatures.css";

function PricingAndFeatures() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <span className="subheading"> Pricing </span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-sm">
        <div className="pricing-plan pricing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span>399
            </p>
            <p className="plan-text">
              per month. That&apos;s just $13 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Order from 1AM and 9PM</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon-red" name="close-outline"></ion-icon>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span>649
            </p>
            <p className="plan-text">
              per month. That&apos;s just $11 per meal!
            </p>
          </header>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>
                <strong>2</strong> meal per day
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Get acces to latest recipes</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full">
              Start eating well
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
          <ion-icon class="feature-icon" name="infinite-outline"></ion-icon>
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <ion-icon class="feature-icon" name="nutrition-outline"></ion-icon>
          <p className="feature-title">Local and organic </p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <ion-icon class="feature-icon" name="leaf-outline"></ion-icon>
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <ion-icon class="feature-icon" name="pause-outline"></ion-icon>
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PricingAndFeatures;
