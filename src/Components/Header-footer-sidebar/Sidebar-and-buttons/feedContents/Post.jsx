import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { PostListContext } from "../../../store/postList-store";

const Post = ({ posts }) => {
  const {deletePost} = useContext(PostListContext);
  return (
    <div className="card my-2" style={{ width: "99%", height: "30vh" }}>
      <div className="card-body">
        <img className="rounded-circle ProfileImagesPost" src={`${posts.image}`} alt="" />
        <h5 className="card-title fs-6">@{posts.username}</h5>
        <p className="card-text">{posts.body}</p>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-7" onClick={() => deletePost(posts.id)}>
          <RiDeleteBin7Fill/>
        </span>
        {posts.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hashtags">#{tags}</span>
        ))}
        <span className="badge text-bg-danger"><FaRegHeart/> {posts.reactions}</span>
        <span className="badge text-bg-secondary"><FaCommentAlt/> {posts.comments}</span>
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
