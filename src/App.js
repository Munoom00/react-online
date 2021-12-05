import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
