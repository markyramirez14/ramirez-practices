import logo from './logo.svg';
import './App.css';

//pages
import Homepage from './pages/Homepage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//router dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  // Insert Js here
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Homepage/>}/>
        <Route path="Page1" element={<Page1/>}/>
        <Route path="Page2" element={<Page2/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
