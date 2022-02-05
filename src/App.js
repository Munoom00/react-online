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
import IndexPage from "./components/pages/category/IndexPage";
import CreatePage from "./components/pages/category/CreatePage";
import EditPage from "./components/pages/category/EditPage";
import UploadPage from "./components/pages/category/UploadPage";
import { ToastProvider } from "react-toast-notifications";
import CategoryPage from "./components/pages/category/CategoryPage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import MemberPage from "./components/pages/MemberPage";
import PrivateRoute from "./guard/auth";
import UserStoreProvider from "./context/UserContext";

function App() {
  return (
    <UserStoreProvider>
      <ToastProvider placement="top-center">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
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
            <Route path="/hospital">
              <HospitalPage />
            </Route>
            <Route path="/upload">
              <UploadPage />
            </Route>
            <PrivateRoute path="/member">
              <MemberPage />
            </PrivateRoute>
            <Route path="/Register">
              <RegisterPage />
            </Route>
            <Route path="/Login">
              <LoginPage />
            </Route>
            <Route
              path="/category"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} exact>
                    <CategoryPage />
                  </Route>
                  <Route path={`${url}/edit/:id`}>
                    <EditPage />
                  </Route>
                </>
              )}
            ></Route>
          </Switch>
          <Footer />
        </Router>
      </ToastProvider>
    </UserStoreProvider>
  );
}

export default App;
