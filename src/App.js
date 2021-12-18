import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
