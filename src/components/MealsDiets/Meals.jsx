import "./Meals.css";
import star from "../../assets/star.svg";
import fork from "../../assets/fork.svg";
import fire from "../../assets/fire.svg";

function Meals() {
  return (
    <section className="section-meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          FoodCreila AI Chooses 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols">
        <div className="meal">
          <img
            src="https://omnifood.dev/img/meals/meal-1.jpg"
            className="meal-img"
          />
          <span className="tag">Vegeterian</span>
          <p className="meal-title">Japanese Gyozas</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <img src={fire} />
              <span>650 calories</span>
            </li>
            <li className="meal-attribute">
              <img src={fork} />
              <span> NutriScore &reg; 74</span>
            </li>
            <li className="meal-attribute">
              <img src={star} />
              <span>4.9rating(537)</span>
            </li>
          </ul>
        </div>
        <div className="meal">
          <img
            src="https://omnifood.dev/img/meals/meal-2.jpg"
            className="meal-img"
          />
          <span className="tag">Vegan</span>
          <span className="tag">Paleo</span>
          <p className="meal-title">Avocado Salad</p>
        </div>
        <div className="meal">Diet</div>
      </div>
    </section>
  );
}

export default Meals;
