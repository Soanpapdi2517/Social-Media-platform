import { IoMdCreate } from "react-icons/io";

const CreatePost = () => {
  return (
    <form className="post-Maker">
      <div className="CreateInputs">
        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Image Address:
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Images Address Here..."
          />
        </div>

        <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username: 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="@Username..."
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write Your Thoughts Here"
          ></textarea>
          <div class="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Hashtags: 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="Any #Hashtags..."
          />
        </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create <IoMdCreate />
      </button>
    </form>
  );
};

export default CreatePost;
