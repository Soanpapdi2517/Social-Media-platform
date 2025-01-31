const NotificationContent = () => {
  return (
    <div className="card notification">
      <div className="card-body">
        <h5 className="card-title">@user</h5>
        <p className="card-text">@user liked your image</p>
        <button type="button" className="btn btn-sm btn-outline-secondary">
          View
        </button>
      </div>
    </div>
  );
};

export default NotificationContent;
