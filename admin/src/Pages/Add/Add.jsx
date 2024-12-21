import { assets } from "../../assets/assets.js";
import "./Add.css";

const Add = () => {
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
      </form>
    </div>
  );
};

export default Add;
