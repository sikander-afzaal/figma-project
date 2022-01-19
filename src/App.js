import React, {useState} from "react";
import "./App.css";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Roadmap from "./Pages/Roadmap/Roadmap.jsx";
import Club from "./Pages/Club/Club.jsx";
import Lottery from "./Pages/Lottery/Lottery.jsx";
import Pets from "./Pages/Pets/Pets.jsx";
import Team from "./Pages/Team/Team.jsx";
import Starter from "./Pages/Starter/Starter.jsx";

function App() {
  const callBack = (value) => {
    setShow(value)
  }
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show ? <Starter func={callBack} /> : 
      <>
      <Header func={callBack} />
      <Home />
      <Roadmap />
      <Club />
      <Lottery />
      <Pets />
      <Team />
      <Footer prop={true} />
      </>
}
    </div>
  );
}

export default App;
