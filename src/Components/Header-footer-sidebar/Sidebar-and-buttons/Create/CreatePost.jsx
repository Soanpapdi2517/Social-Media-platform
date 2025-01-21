import { IoMdCreate } from "react-icons/io";

const CreatePost = () => {
  return (
    <form className="post-Maker">
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write Your Thoughts Here"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Create <IoMdCreate />
      </button>
    </form>
  );
};

export default CreatePost;
