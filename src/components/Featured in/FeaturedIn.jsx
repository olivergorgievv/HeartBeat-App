import "./FeaturedIn.css";

function FeaturedIn() {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As Featured In</h2>
        <div className="logos">
          <img src="https://omnifood.dev/img/logos/techcrunch.png" />
          <img src="https://omnifood.dev/img/logos/business-insider.png" />
          <img src="https://omnifood.dev/img/logos/the-new-york-times.png" />
          <img src="https://omnifood.dev/img/logos/forbes.png" />
          <img src="https://omnifood.dev/img/logos/usa-today.png" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
