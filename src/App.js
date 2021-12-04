import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './components/Logo';
import './App.css';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
function App() {
  return (
    <div className="logo">
      <Logo />
      <Header />
      <Footer title="TNI" website="www.google.com" address="Bangkok" postcode={10220} isOpen></Footer>
      <Sidebar />
      <Menu />
    </div>
  );
}

export default App;
