const FriendReq = () => {
  return (
    <div className="card my-2 notification" style={{ width: "18rem;" }}>
      <div className="card-body">
        <h5 className="card-title">@user</h5>
        <p className="card-text">@user sent you request</p>
        <button type="button" class="btn btn-sm btn-outline-secondary">
          View
        </button>
      </div>
    </div>
  );
};

export default FriendReq;
