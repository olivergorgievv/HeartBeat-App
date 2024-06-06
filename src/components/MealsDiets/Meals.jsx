import "./Meals.css";

function Meals() {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Features</span>
        <h2 className="heading-secondary">
          Built-in growth, Built-in engagement
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        <div className="meal">
          <img
            src="https://cdn.prod.website-files.com/61096122507f250678302b22/64b3110de9db6e47d546f57c_EngagementFeatures.png"
            className="meal-img"
          />
          <div className="meal-content">
            <div className="meals-tags">
              <span className="tag tag--vegeterian">University</span>
            </div>

            <p className="meal-title">Heartbeat University</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="book-outline"></ion-icon>
                <span>
                  <strong>650 </strong>Courses
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  class="meal-icon"
                  name="chatbubbles-outline"
                ></ion-icon>
                <span>
                  Discussions <strong>15500</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="calendar-outline"></ion-icon>
                <span>
                  <strong>630 </strong>Events
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal">
          <img
            src="https://cdn.prod.website-files.com/61096122507f250678302b22/64b3110d7079905e886aa09f_GrowthFeatures.png"
            className="meal-img"
          />
          <div className="meal-content">
            <div className="meals-tags">
              <span className="tag tag--vegan">University</span>
              <span className="tag tag--paleo">User Guide</span>
            </div>
            <p className="meal-title">Engagement Features</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon
                  class="meal-icon"
                  name="chatbubbles-outline"
                ></ion-icon>
                <span>
                  <strong>11,000</strong> Discussions
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="book-outline"></ion-icon>
                <span>
                  Courses <strong>1020</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="calendar-outline"></ion-icon>
                <span>
                  <strong>900</strong> Events
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="diets">
          <h3 className="heading-tertiary">
            Built-in growth, Built-in engagement
          </h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Zoom
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Notion
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Outlook Calendar
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Stripe
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Google Calendar
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Pabbly
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipes">
        <a href="" className="link">
          See all features &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
