import "./PricingAndFeatures.css";

function PricingAndFeatures() {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading"> Pricing </span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>
      <div className="container grid grid--2-cols">
        <div className="pricing-plan">
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
              <span>Order times are between 1am and 9pm</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Delivery is free</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a href="#" className="btn btn-full">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan">
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
              <span>2 meal per day</span>
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              <span>Order 24/7</span>
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
    </section>
  );
}

export default PricingAndFeatures;
