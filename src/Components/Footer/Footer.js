import { Link, NavLink} from "react-router-dom";

function Footer(){
    return(
        <div>
            <div className="FooterContainer">
                <footer className="footer">
                    <div className="footer__addr">
                    <NavLink to="Home"><img className="logo" src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Pharma+Main+Logo.png" alt="Logo"></img></NavLink>                            
                        <h2>Contact</h2>
                        
                        <address>
                        R&D Center:<br></br>
                        Plot No.153, Phase III,<br></br>
                        Industrial park,<br></br>
                        Pashamylaram,<br></br>
                        Medak District-502307,<br></br>
                        Telangana, India.<br></br>
                        <br></br>
                        Phone: (+91)-40-23545946<br></br>
                        Fax:(+91)-40-23545949<br></br>
                        info@cellixbiopharma.com<br></br>
                        R&D<br></br>
                        Phone:+91 8455-295832<br></br>
                        operations@avacapharma.com<br></br>
                        </address>
                    </div>
                    
                    <ul className="footer__nav">
                        <li className="nav__item nav__item--extra">
                            {/* <h2 className="nav__title">Technology</h2> */}
                            <ul className="nav__ul nav__ul--extra">
                                    <li>
                                        <Link className='navbar_link' to="/home">Home</Link>
                                    </li>
                                    
                                    <li>
                                        <Link className='navbar_link' to="/aboutus">About Us</Link>
                                    </li>
                                    
                                    <li>
                                        <Link className='navbar_link' to="/discovery">Discovery</Link>
                                    </li>

                                    <li>
                                        <Link className='navbar_link' to="/patents">Patents</Link>
                                    </li>
                                    
                                    <li>
                                        <Link className='navbar_link' to="/services">Services</Link>
                                    </li>
                                    
                                    <li>
                                        <Link className='navbar_link' to="/infra">Infrastructure</Link>
                                    </li>

                                    <li>
                                        <Link className='navbar_link' to="/leadership">Leadership</Link>
                                    </li>

                                    <li>
                                        <Link className='navbar_link' to="/media">Media</Link>
                                    </li>

                                    <li>
                                        <Link className='navbar_link' to="/gallery">Gallery</Link>
                                    </li>

                                    <li>
                                        <Link className='navbar_link' to="/careers">Careers</Link>
                                    </li>

                                    <li>
                                        <Link className='navbar_link' to="/contactus">Contact Us</Link>
                                    </li>
                            </ul>
                        </li>
                        
                        <li className="nav__item">
                            <ul class="nav__ul">
                                <li>
                                    <Link className="navbar_link" to="/home">Privacy Policy</Link>
                                </li>
                                
                                <li>
                                <Link className="navbar_link" to="/home">Terms of Use</Link>
                                </li>
                                
                                <li>
                                    <Link className="navbar_link" to="/home">Sitemap</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div className="legal">
                        <p>&copy; {new Date().getFullYear()} Avaca Pharma. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default Footer;