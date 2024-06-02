import "./Meals.css";

function Meals() {
  return (
    <section className="section-meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          FoodCreila AI Chooses 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        <div className="meal">
          <img
            src="https://omnifood.dev/img/meals/meal-1.jpg"
            className="meal-img"
          />
          <div className="meal-content">
            <div className="meals-tags">
              <span className="tag tag--vegeterian">Vegeterian</span>
            </div>

            <p className="meal-title">Japanese Gyozas</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>650</strong> calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  {" "}
                  NutriScore &reg; <strong>74</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.9 </strong>rating(537)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="meal">
          <img
            src="https://omnifood.dev/img/meals/meal-2.jpg"
            className="meal-img"
          />
          <div className="meal-content">
            <div className="meals-tags">
              <span className="tag tag--vegan">Vegan</span>
              <span className="tag tag--paleo">paleo</span>
            </div>
            <p className="meal-title">Avocado Salad</p>
            <ul className="meal-attributes">
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                <span>
                  <strong>450</strong> calories
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon
                  class="meal-icon"
                  name="restaurant-outline"
                ></ion-icon>
                <span>
                  {" "}
                  NutriScore &reg; <strong>92</strong>
                </span>
              </li>
              <li className="meal-attribute">
                <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                <span>
                  <strong>4.8 </strong>rating(441)
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet</h3>
          <ul className="list">
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Vegeterian
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Pescatarian
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Gluten-free
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Lactose-free
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Keto
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Low-FODMAP
            </li>
            <li className="list-item">
              <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
              Kid-Friendly
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipes">
        <a href="" className="link">
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
}

export default Meals;
