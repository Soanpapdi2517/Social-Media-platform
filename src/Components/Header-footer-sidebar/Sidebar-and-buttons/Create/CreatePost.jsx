import { useContext, useRef } from "react";
import { IoMdCreate } from "react-icons/io";
import { PostListContext } from "../../../store/postList-store";

const CreatePost = () => {
  const { addPostList } = useContext(PostListContext);
  const postHashtag = useRef();
  const postUsername = useRef();
  const postImage = useRef();
  const postBody = useRef();
  const handleOnChangeValues = (event) => {
    event.preventDefault();
    const tags = postHashtag.current.value.split(" ");
    addPostList(
      postUsername.current.value,
      postBody.current.value,
      postImage.current.value,
      tags
    );
    postUsername.current.value = "";
    postImage.current.value = "";
    postBody.current.value = "";
    postHashtag.current.value = [""];
  };
  return (
    <form className="post-Maker" onSubmit={handleOnChangeValues}>
      <h1 className="h3 mb-3 fw-semibold fs-2">Create Your Post</h1>
      <div className="CreateInputs">
        <div className="form-floating mb-3">
          <input
            ref={postUsername}
            type="username"
            className="form-control"
            id="floatingInput"
            placeholder="@username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            ref={postImage}
            className="form-control"
            id="floatingPassword"
            placeholder="Enter Your Image Addres"
          />
          <label htmlFor="floatingPassword">Image Address</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            ref={postBody}
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea2">Write Your thoughts Here...</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            ref={postHashtag}
            className="form-control"
            id="floatingHashtags"
            placeholder="@Hashtags"
          />
          <label htmlFor="floatingPassword">Hashtag</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create <IoMdCreate />
      </button>
    </form>
  );
};

export default CreatePost;
