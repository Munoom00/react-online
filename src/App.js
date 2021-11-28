import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import './App.css';
function App() {
  return (
    <div className="logo">
      <Logo />
      <Header />
      <Footer title={"TNI"} website="www.google.com" address="Bangkok" postcode={10220} isOpen></Footer>
    </div>
  );
}

export default App;
