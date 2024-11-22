import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu.jsx";
import Header from "../../Components/Header/Header.jsx";
import "./Home.css";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;
