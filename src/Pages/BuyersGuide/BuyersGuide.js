//Router
import {Link} from "react-router-dom";
import step1 from "Assets/images/contract2.jpg";
import step2 from "Assets/images/realtor.jpg";
import step3 from "Assets/images/contract2.jpg";
import step4 from "Assets/images/sale-sign.jpg";
import step5 from "Assets/images/property.jpg";
function BuyersGuide() {
  return (
    <div className="buyers-container">
      <section className="steps-container">
        <h1>Buyers Guide</h1>
        <div className="steps">
          <div className="box">
            <img src={step1} alt="Contract Signing" className="img-step"></img>
            <p>Schedule an Appointment with our Business partner</p>
          </div>

          <div className="box">
            <img
              src={step2}
              alt="Realtor House Tour"
              className="img-step"
            ></img>
            <p>Tour around the house</p>
          </div>

          <div className="box">
            <img src={step3} alt="Contract Signing" className="img-step"></img>
            <p>Fill up Application for reservation of unit</p>
          </div>

          <div className="box">
            <img
              src={step4}
              alt="For Sale Sign Sold"
              className="img-step"
            ></img>
            <p>Confirmation of buying</p>
          </div>

          <div className="box">
            <img src={step5} alt="Toy House" className="img-step"></img>
            <p>Turnover of property</p>
          </div>
        </div>
      </section>
      <div className="buyers-btn">
        <Link to="/contacts">
        <button type="button" className="btn-sched" value="Search">
          Schedule Appointment
        </button>
        </Link>
      </div>
      {/** */}
      <div className="buyers-process">
        <section className="reservation">
          <h1>Reservation Process:</h1>
          <ol>
            <li>
              Choose your preferred project location and the type of unit.
            </li>
            <li>
              Request for a sample computation of the unit through our
              accredited seller to get an idea on the financing
            </li>
            <li>
              Fill up completely and sign the Reservation Agreement form and
              prepare 2 valid ID's.
            </li>
            <li>Pay the Reservation Fee</li>
          </ol>
        </section>

        <section className="documents">
          <h1>Documentary Requirements</h1>
          <ul>
            <li>Final Computation Sheet</li>
            <li>Credit Approval</li>
            <li>Reservation Fee and Post Dated Checks for Down Payment</li>
            <li>2 Valid Government Issued ID</li>
            <li>Bank Guarantee or Guarantee Check</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
export default BuyersGuide;
