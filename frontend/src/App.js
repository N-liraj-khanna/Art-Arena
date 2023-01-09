import "./App.css";

import Header from "./Components/Header";
import Settings from "./Components/Settings";
import Gaming from "./Components/Gaming";
import GameEnd from "./Components/GameEnd";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Settings />
      <Gaming />
      <GameEnd />
      <Footer />
    </div>
  );
}

export default App;
