import "./AppDownload.css";
import { assets } from "../../assets/assets.js";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better Experience Download <br />
        Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Store image" />
        <img src={assets.app_store} alt="App image" />
      </div>
    </div>
  );
};

export default AppDownload;
