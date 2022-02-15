import step1 from "Assets/images/contract2.jpg";
import step2 from "Assets/images/realtor.jpg";
import step3 from "Assets/images/contract2.jpg";
import step4 from "Assets/images/sale-sign.jpg";
import step5 from "Assets/images/property.jpg";
function BuyersGuide() {
  return (
    <div className="buyers-container">
         <div className="box">
             <img src={step1} alt="tite" className="img-step"></img>
             <p>Schedule an Appointment with our Business partner</p>
         </div>

         <div className="box">
             <img src={step2} alt="tite" className="img-step"></img>
             <p>Tour around the house</p>
         </div>

         <div className="box">
             <img src={step3} alt="tite" className="img-step"></img>
             <p>Fill up Application for reservation of unit</p>
         </div>

         <div className="box">
             <img src={step4} alt="tite" className="img-step"></img>
             <p>Confirmation of buying</p>
         </div>

         <div className="box">
             <img src={step5} alt="tite" className="img-step"></img>
             <p>Turnover of property</p>
         </div>
      </div>
  );
}
export default BuyersGuide;
