import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Card from "./Components/Card/Card";
import Experience from "./Components/Experience/Experience";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Card/>
      <Experience/>
    </div>
  );
}

export default App;
