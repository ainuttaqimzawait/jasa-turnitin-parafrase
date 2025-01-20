import React from 'react';
import "./tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import TopBar from './components/TopBar';
import Heroes from './components/Heroes';
import Layanan from './components/Layanan';
import Reason from './components/Reason';
import Pemesanan from './components/Pemesanan';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-center">
      <TopBar />
      <Heroes />
      <Layanan />
      <Reason />
      <Pemesanan />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
