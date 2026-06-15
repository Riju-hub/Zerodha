function Hero() {
  return (
    <section id="supportHero" >
      {/* Header Part */}
      <div id="supportWrapper">
        <h4 className="fw-bold">Support Portal</h4>
        <a href="#" style={{ textDecoration: 'underline' }} className="fs-5">Track Tickets</a>
      </div>

      {/* Main Content Part */}
      <div className="container-fluid">
        <div className="row px-lg-5 mx-lg-5">
          {/* Left Side: Search & Quick Links */}
          <div className="col-md-7 px-lg-5">
            <h1 className="search-title">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              placeholder="Eg: How do i activate F&O, why my order getting rejected.."
            />
            <div className="quick-links ">
              <a href="">Track account opening</a>&nbsp;&nbsp;
              <a href="">Track segment activation</a>&nbsp;&nbsp;
              <a href="">Intraday margins</a>&nbsp;&nbsp;
              <a href="">Kite user manual</a>
            </div>
          </div>

          {/* Right Side: Featured */}
          <div className="col-md-5 featured-box">
            <h2 className="fs-2">Featured</h2>
            <ol>
              <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;