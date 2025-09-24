import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="app h-screen bg-[#8a2be2] max-w-[1300px] mx-auto flex flex-col justify-between">
      <NavBar />
      <Hero />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
