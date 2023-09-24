// import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Footer from './pages/Footer';
import PaketHarga from './pages/Harga';
import Home from './pages/Home';
import Layanan from './pages/Layanan';
import Testimony from './pages/Testimoni';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <Layanan />
      <PaketHarga />
      <Testimony />
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
