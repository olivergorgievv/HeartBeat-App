import "./Hero.css";

function Cta() {
  return (
    <>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              The all-in-one platform for community businesses
            </h1>
            <p className="hero-description">
              We moved all of our courses — over 1000 lessons — onto Heartbeat
              and built space for our morning meet-ups and evening story-telling
              experiences.
            </p>
            <a href="#cta" className="btn btn-full margin-right-sm">
              Start chatting
            </a>
            <a href="#how" className="btn--hero">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-faces">
                <img src="https://omnifood.dev/img/customers/customer-1.jpg" />
                <img src="https://omnifood.dev/img/customers/customer-2.jpg" />
                <img src="https://omnifood.dev/img/customers/customer-3.jpg" />
                <img src="https://omnifood.dev/img/customers/customer-4.jpg" />
                <img src="https://omnifood.dev/img/customers/customer-5.jpg" />
                <img src="https://omnifood.dev/img/customers/customer-6.jpg" />
              </div>
              <p className="delivered-text">
                <span>500,000+</span> messages sent last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              className="hero-img"
              alt="Woman Enjoing food, meals in storage container, and food bowls on a table"
              src="https://i.ibb.co/n6cShp4/Group-270989716-4.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
