const Activity = () => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-2 pb-1 mb-1 border-bottom activty">
        <h1 className="h2">Your Activity</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1"
          >
            
            This week
          </button>
        </div>
      </div>

      <canvas
        className="my-4 w-100"
        id="myChart"
        width="1255"
        height="530"
        style={{
          display: "block",
          boxSizing: "border-box",
          height: "385px",
          width: "913px",
        }}
      ></canvas>
    </main>
  );
};

export default Activity;
