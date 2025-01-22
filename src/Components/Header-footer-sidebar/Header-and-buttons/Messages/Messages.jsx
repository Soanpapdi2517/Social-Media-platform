const Messages = () => {
  return (
    <div className="card my-2 notification" style={{ width: "99%" }}>
      <div className="card-body">
        <h5 className="card-title">@user</h5>
        <p className="card-text">@user sent you Message</p>
        <button type="button" className="btn btn-sm btn-outline-secondary">
          View
        </button>
      </div>
    </div>
  );
};

export default Messages;
