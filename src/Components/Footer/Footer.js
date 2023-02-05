import { Link, NavLink} from "react-router-dom";
import GoToTop from "./GoToTop";

function Footer(){
    return(
        <>
            <div className="FooterContainer">
                <footer className="footer">
                    <div className="footer__addr">
                    <NavLink to="Home"><img className="footer-logo" src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Pharma+Main+Logo.png" alt="Logo"></img></NavLink>
                        <address>
                            R&D Center :<br></br>
                            Plot No.153, Phase III,<br></br>
                            Industrial park,<br></br>
                            Pashamylaram,<br></br>
                            Medak District-502307,<br></br>
                            Telangana, India.<br></br>
                            <br></br>
                            Phone: (+91)-40-23545946<br></br>
                            info@cellixbiopharma.com<br></br>
                            R&D<br></br>
                            Phone:+91 84552-95832<br></br>
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
                            <ul className="nav__ul">
                                <li>
                                    <Link className="navbar_link" to="/privacy">Privacy Policy</Link>
                                </li>
                                
                                <li>
                                    <Link className="navbar_link" to="/terms">Terms of Use</Link>
                                </li>
                                
                                <li>
                                    <Link className="navbar_link" to="/home">Sitemap</Link>
                                </li>
                            </ul>
                        </li>
                        
                        <li className="nav__item">
                            <address>
                                Factory : <br></br>
                                Avaca Pharma Private Limited,<br></br>
                                CAE1605258,<br></br>
                                SY NO: 41 - 1A1<br></br>
                                Dondpadu Road Street,<br></br>
                                Mukteswarapuram Village,<br></br>
                                Jaggayyapeta Mandal,<br></br>
                                Ntr District,<br></br>
                                Andhra Pradesh,<br></br>
                                India
                            </address>
                        </li>
                    </ul>
                    
                    <div className="legal">
                        <p>&copy; 2019 - {new Date().getFullYear()} Avaca Pharma. All rights reserved. Operating Subsidiary of <a href="http://cellixbio.com"  target="_blank" rel="noreferrer">Cellix Bio</a></p>
                    </div>
                </footer>
            </div>
            <GoToTop/>
        </>
    );
}
export default Footer;