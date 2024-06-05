import "./HowItWorks.css";

function HowItWorks() {
  return (
    <>
      <section className="section-how" id="how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Design a vibrant space to chat & connect
          </h2>
        </div>
        {/* STEP 01 */}
        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Craft fun & engaging learning journeys
            </h3>
            <p className="step-description">
              Evergreen courses Cohort-based courses Drip lessons Free previews
              & upsells Public & private assignments Native video hosting Push
              notifications Automated workflows
            </p>
          </div>
          <div className="step-img-box">
            <img src="https://i.imgur.com/CcE8a0t.png" className="step-img" />
          </div>

          {/* STEP 02 */}
          <div className="step-img-box">
            <img src="https://i.imgur.com/0Z4PIyc.png" className="step-img" />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">
              Host live events directly in Heartbeat
            </h3>
            <p className="step-description">
              Public & private events Paid event tickets Track attendance & save
              recordings Automatic feedback collection Recurring & one-off
              events Email reminders Zoom integration Push notifications
              Automated workflows
            </p>
          </div>

          {/* STEP 03 */}
          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">
              Build a knowledge base for your members
            </h3>
            <p className="step-description">
              Full Notion-style markdown editor Bullet lists, tables, dividers,
              and text styling Embed videos, podcasts, files, and more HTML
              embeds from 2,000+ websites Folders & sub-documents Universal
              search Easily manage edit & view access Paid document sections
            </p>
          </div>
          <div className="step-img-box">
            <img src="https://i.imgur.com/BkQPskU.png" className="step-img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
