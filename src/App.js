import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import GoToTopButton from './Components/Body/GoToTopBtn';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Helmet>
            <meta name="description" content="AvacaPharma's Informative Web Application for it's Technology and Infrastructure" />
            <meta name='keywords' content='AvacaPharma, Cellix Bio Pharma, cellix bio ,Mahesh Kandula, Mahesh Kandula Patents, Prism Science' />
          </Helmet>
          <NavBar></NavBar>
          <Footer></Footer>
        </BrowserRouter>
        <GoToTopButton></GoToTopButton>
    </div>
  );
}

export default App;
