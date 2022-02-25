function Contact() {
  return (
    <>
      <div className="contact-container">
        <section className="app-container">
          <form>
          <h1>Schedule an Appointment</h1>
            <div className="schedule-form">
              <div className="per-info">
                <label htmlFor="fname">Firstname:</label>
                <input type="text" className="txt" id="fname"></input>
                <label htmlFor="lname">Lastname:</label>
                <input type="text" className="txt" id="lname"></input>
              </div>

              <div className="contact-info">
                <label htmlFor="contnum">Contact Number:</label>
                <input type="text" className="txt" id="contnum"></input>
                <label htmlFor="email">Email Address:</label>
                <input type="text" className="txt" id="email"></input>
              </div>

              <div className="msg-container">
                <label htmlFor="txt-msg">Message</label>
                <textarea name="" id="txt-msg" cols="60" rows="10"></textarea>
              </div>

              <div className="btn-con">
               <input type="button" className="btn-submit" value="Submit" />
              </div>
            </div>
          </form>
        </section>

        <section className="company-contact">
        <div className="info">
        <h1>Contact Information</h1>
          <h1>Main Office</h1>
          <p>721 Fifth Avenue Manhattan, New York</p>

          <h1>Office Number</h1>
          <p>5251-6531</p>

          <h1>Office Hours</h1>
          <p>8AM - 10PM</p>

          <h1>Customer Care Hotline</h1>
          <p>9415 - 5161</p>
        </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
