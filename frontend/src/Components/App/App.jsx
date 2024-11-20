import NavBar from "../NavBar/NavBar.jsx";
import css from "./App.module.css";
const App = () => {
  return (
    <div>
      <div className={css.app}>
        <NavBar />
      </div>
    </div>
  );
};

export default App;
