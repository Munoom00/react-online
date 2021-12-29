// import Header from "./components/Header";
import Footer from "./components/Footer";
// import Logo from "./components/Logo";
import "./App.css";
// import Sidebar from "./components/Sidebar";
// import Menu from "./components/Menu";
import HomePage from "./components/pages/HomePage";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import ProductPage from "./components/pages/ProductPage";
import DetailPage from "./components/pages/DetailPage";
import ContactUs from "./components/pages/ContactUs";
import HospitalPage from "./components/hospital/HospitalPage";
import category from "./components/hospital/category";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/detail/:id/title/:title">
          <DetailPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/hospitalPage">
          <HospitalPage />
        </Route>
        <Route path="/category">
          <category />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
