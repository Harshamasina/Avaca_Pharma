import { Link } from "react-router-dom";
import HomeContent from "../Body/HomeContent";
import ModalPopUp from "../Body/ModalPopUp";
// import { CgOrganisation } from "react-icons/cg";

function Home(){
    return(
        <>
            <div className='landingpage'>
              <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Laboratory.mp4" autoPlay muted loop className='video-bg' type="video/mp4"/>
                {/* <div className='bg-overlay'></div> */}
                    <div className='home-text'>
                            <div>
                                <h1 className='Carouselh1'>Welcome to Avaca Pharma</h1>
                                <p className='Carouselp'>INNOVATION FOR BETTER HEALTH</p>
                            </div>
                            
                            <div>
                                <h1 className='Carouselh1'>Commercial Operations</h1>
                                <p className='Carouselp'>Avaca Pharma is leader in application of science and data driven methodologies</p>
                            </div>
                            
                            <div>
                                <h1 className='Carouselh1'>The R&D form Dosage Capability</h1>
                                <p className='Carouselp'>The total cGMP space of 6000 Sq. ft. in a  1.2-acre location, of which Formulation occupies 3000 sq. ft. and  Analytical Operations 3000 sq. ft. with provisions for expansion</p>
                            </div>
                     </div>
                    <Link className='homeBtn' to="/patents">Get Started</Link>
            </div>
            <HomeContent></HomeContent>
            <ModalPopUp></ModalPopUp>
        </>
    )
}

export default Home;