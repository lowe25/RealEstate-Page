function Home() {
  return (
    <>
      <div className="landing-container">
        <section className="house-search">
          <div className="housebox">
            <h1>Search Your Dream House</h1>
            <form className="form">
              <input type="text" className="txt-loc" placeholder="Location"></input>
              <input type="text" className="txt-price" placeholder="Price"></input>
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
