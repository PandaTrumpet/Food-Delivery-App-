import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu.jsx";
import Header from "../../Components/Header/Header.jsx";
import "./Home.css";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay.jsx";
import AppDownload from "../../Components/AppDownload/AppDownload.jsx";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
