import About from "./Components/About/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation/Navigation"
import Project from "./Components/Project";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
