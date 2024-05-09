import './App.css';
import Home from "./Home";
import Footer from './components/Footer';
// import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <div style={{minHeight: "400px",}}>
      <NavBar />
        {/* <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/' element={ <Tips /> } />
        </Routes> */}
       <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
