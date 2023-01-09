import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
