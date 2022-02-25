function Home() {
  return (
    <>
      <div className="landing-container">
        <section className="house-search">
          <div className="housebox-src">
            <h1>Search Your Dream House</h1>
            <form className="form">
              <select className="txt-loc">
                <option selected disabled>Choose Area</option>
                <option>Chicago</option>
                <option>Minnesota</option>
                <option>California</option>
                <option>New York</option>
              </select>
                <select className="txt-price">
                <option selected disabled>Choose Price</option>
                <option>$4,000</option>
                <option>$6,000</option>
                <option>$9,000</option>
                <option>$10,000</option>
              </select>
              <button type="button" className="btn-search" value="Search">
                Search
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
