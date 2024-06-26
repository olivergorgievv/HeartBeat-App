import "./CTA.css";

function CallToAction() {
  return (
    <section className="section-cta" id="cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Launch a thriving community</h2>
            <p className="cta-text">
              Engage members 10X faster. Bring conversations, content, events,
              courses, and more under 1 roof to concentrate engagement.
            </p>
            <form className="cta-form" action="#">
              <div>
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="John Smith" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="origin">Where did you hear from us?</label>
                <select name="" id="origin">
                  <option value="friends">Please choose one option:</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">Youtube Video</option>
                  <option value="podcast">Podcast</option>
                  <option value="facebook">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <button className="btn btn--form" type="submit">
                Sign up now
              </button>
            </form>
          </div>
          <div className="cta-img-box"></div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
