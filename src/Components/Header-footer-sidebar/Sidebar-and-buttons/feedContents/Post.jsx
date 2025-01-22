const Post = () => {
  return (
    <div className="card my-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">@user</h5>
        <p className="card-text">thoughts of user will be here</p>
        <a href="#" className="btn btn-primary">
          Check Post
        </a>
      </div>
    </div>
  );
};

export default Post;
