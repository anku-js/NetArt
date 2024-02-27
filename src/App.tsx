import "./App.css";
import HeroPage from "./components/HeroPage/HeroPage";
import SecondPage from "./components/SecondPage/SecondPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <HeroPage />
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;
