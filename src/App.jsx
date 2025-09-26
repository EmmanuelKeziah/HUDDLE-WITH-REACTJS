import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Attribution from "./components/Attribution";

function App() {
  return (
    <main className="app min-h-screen bg-[#8a2be2] flex flex-col flex-1">
      <div className="flex flex-col flex-1 max-w-[1300px] mx-auto px-4 lg:px-8">
        <NavBar />
        <Hero />
        <Footer />
        <Attribution />
      </div>
    </main>
  );
}

export default App;
