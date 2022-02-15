import { houseData } from "../HouseData/houseData";
function Properties() {
  return (
    <>
      <div className="properties-container">
        <div className="house-list">
        <section className="property-list">
        <h1>House And Lot</h1>
        <div className="box-con">
          {houseData.map((item, index) => {
            return (
              <>
                <div className="box">
                  <img
                    src={item.imgHouse}
                    className="housePicture"
                    alt="House and Lot"
                  ></img>
                  <p className="houseName">{item.houseName}</p>
                </div>
              </>
            );
          })}
          </div>
        </section>
        </div>
      </div>
    </>
  );
}

export default Properties;
