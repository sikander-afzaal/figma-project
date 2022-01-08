import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Roadmap from "./Pages/Roadmap/Roadmap.jsx";
import Club from "./Pages/Club/Club.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Roadmap />
      <Club />
    </div>
  );
}

export default App;
