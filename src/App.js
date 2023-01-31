import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import GoToTopButton from './Components/Body/GoToTopBtn';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar></NavBar>
          <Footer></Footer>
        </BrowserRouter>
        <GoToTopButton></GoToTopButton>
    </div>
  );
}

export default App;
