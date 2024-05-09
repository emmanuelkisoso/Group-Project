import './App.css';
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
      </div>
      <Footer />
    </div>
  );
}

export default App;
