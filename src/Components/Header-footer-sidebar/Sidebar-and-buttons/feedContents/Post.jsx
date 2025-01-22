const Post = ({ posts }) => {
  return (
    <div className="card my-2" style={{ width: "99%", height: "30vh" }}>
      <div className="card-body">
        <img className="rounded-circle ProfileImagesPost" src={`${posts.image}`} alt="" />
        <h5 className="card-title fs-6">@{posts.username}</h5>
        <p className="card-text">{posts.body}</p>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {posts.reactions}
        </span>
        {posts.tags.map((tags) => (
          <span class="badge text-bg-primary hashtags">#{tags}</span>
        ))}
        ;
        <div>
          <a href="#" className="btn btn-primary">
            Check Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
