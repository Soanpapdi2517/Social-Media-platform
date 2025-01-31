const Trends = () => {
  return (
    <div className="album py-5 bg-body-tertiary trend-box">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
          <div className="card shadow-sm">
              <img src="https://cdn5.vectorstock.com/i/1000x1000/55/94/squid-game-film-design-clothes-pink-square-shape-vector-39825594.jpg" alt="" />
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-body-secondary">{Math.round(Math.random()*60)} mins ago</small>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Trends;
