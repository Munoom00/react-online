import Footer from "./components/Footer";
import "./App.css";
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

// redux setup
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/index";
import CartPage from "./components/pages/CartPage";
const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <UserStoreProvider>
        <ToastProvider>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/contact_us">
                <ContactUs />
              </Route>
              <Route path="/product">
                <ProductPage />
              </Route>
              <Route path="/detail/:id/title/:title">
                <DetailPage />
              </Route>
              <Route path="/hospital">
                <HospitalPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/cart">
                <CartPage />
              </Route>
              <Route path="/register">
                <RegisterPage />
              </Route>
              <Route path="/upload">
                <UploadPage />
              </Route>
              <PrivateRoute path="/member">
                <MemberPage />
              </PrivateRoute>
              {/* makesense */}
              <Route
                path="/category"
                render={({ match: { url } }) => (
                  <>
                    <Route path={`${url}/`} exact>
                      <IndexPage />
                    </Route>
                    <Route path={`${url}/create`}>
                      <CreatePage />
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
    </Provider>
  );
}
export default App;
