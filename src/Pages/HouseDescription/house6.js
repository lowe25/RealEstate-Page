import stCloud from "Assets/images/StCloud.jpg";
function House6() {
  return (
    <div className="houseDesc-container">
      <section className="house">
        <div className="img-div">
          <img src={stCloud} alt="stCloud House" className="house-img"></img>
        </div>
        <div className="house-description">
          <p>House Name: St Cloud</p>
          <p>Floor Area: 166 sqm</p>
          <p>Lot Area: 143 sqm</p>
          <p>Price: $5,000</p>
          <div className="btn-desc">
              <button type="submit" className="btn-inqure">Inquire</button>
          </div>
        </div>
      </section>

      <section className="house-info">
        <h1>Details:</h1>
        <div className="housebox">
          <div className="house">
            <ul>
              <li>Bathrooms: 1</li>
              <li>Garage: None</li>
              <li>Bedrooms: 2</li>
              <li>Porch:</li>
              <li>Balcony:</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="house-desc">
        <h1>Description:</h1>
        <div className="housebox">
          <p>
            St Cloud is Richmond most spacious house offering yet, with five
            spacious bedrooms, three neat toilet-and-baths, a wide two-car
            carport and a refreshing balcony. Its master’s bedroom is equipped
            with its own bathtub and a provision for a walk-in closet to give
            you a luxurious and better living experience. Every moment is great
            in Greta, where you can find your favorite features for a smart and
            healthy home.
          </p>
        </div>
      </section>

      <section className="house-features">
        <h1>Features:</h1>
        <div className="features">
          <table>
            <tr>
              <td>Floor Area: 166 sqm</td>
              <td>Land Area:166 sqm</td>
            </tr>
            <tr>
              <td>Bedroom: 2</td>
              <td>Bathroom: 1</td>
            </tr>
            <tr>
              <td>Garage: None</td>
              <td>Balcony: None</td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default House6;
