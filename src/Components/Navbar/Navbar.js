import Logo from './Logo';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Discovery from './Discovery';
import Patents from './Patents';
import Services from './Services';
import Infrastructure from './Infra';
import Leadership from './Leadership';
import Media from './Media';
import Gallery from './Gallery';
import Careers from './Careers';
import ContactUs from './ContactUs';
import Error from '../Body/Error';
import Terms from '../Body/Terms';
import Privacy from '../Body/privacy';
import Pipeline from './Pipeline';

function NavBar(){
        const [changeNavbar, setChangeNavbar] = useState(false);
        const changeBackground = () => {
            if(window.scrollY >= 800){
                setChangeNavbar(true);
            }else{
                setChangeNavbar(false);
            }
        }
        window.addEventListener('scroll', changeBackground);
    return(
        <>
            <div>
                <Navbar
                 collapseOnSelect  
                 variant={"dark"} 
                 expand="lg" 
                //  className='color-nav-scroll'
                 className={changeNavbar ? 'color-nav' : 'color-nav-scroll'}
                 >
                    <Logo></Logo>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggle'></Navbar.Toggle>
                    <Navbar.Collapse>
                        <Nav
                            className="ms-auto my-2 my-xxl-0 gap-2 me-3"
                            style={{ maxHeight: '100%',fontSize:'17px'}}
                            responsive-navbar-nav
                        >
                            <Nav.Link className='navbar_link' as={Link} to="/home" eventKey="1">Home</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/aboutus" eventKey="2">About Us</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/discovery" eventKey="3">Discovery</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/pipeline" eventKey="4">Pipeline</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/patents" eventKey="5">Patents</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/services" eventKey="6">Services</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/infra" eventKey="7">Infrastructure</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/leadership" eventKey="8">Leadership</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/media" eventKey="9">Media</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/gallery" eventKey="10">Gallery</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/careers" eventKey="11">Careers</Nav.Link>
                            <Nav.Link className='navbar_link' as={Link} to="/contactus" eventKey="12">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <hr></hr>
            </div>

            <div>
                <Routes>
                    <Route path='/home' element={<Home></Home>}></Route>
                    <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
                    <Route path='/discovery' element={<Discovery></Discovery>}></Route>
                    <Route path='/pipeline' element={<Pipeline></Pipeline>}></Route>
                    <Route path='/patents' element={<Patents></Patents>}></Route>
                    <Route path='/services' element={<Services></Services>}></Route>
                    <Route path='/infra' element={<Infrastructure></Infrastructure>}></Route>
                    <Route path='/leadership' element={<Leadership></Leadership>}></Route>
                    <Route path='/media' element={<Media></Media>}></Route>
                    <Route path='/gallery' element={<Gallery></Gallery>}></Route>
                    <Route path='/careers' element={<Careers></Careers>}></Route>
                    <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='*' element={<Error></Error>}></Route>
                    <Route path='/terms' element={<Terms></Terms>}></Route>
                    <Route path='/privacy' element={<Privacy></Privacy>}></Route>
                </Routes>
            </div>
        </>
    )
}

export default NavBar;