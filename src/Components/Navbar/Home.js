import { Link } from "react-router-dom";
import HomeContent from "../Body/HomeContent";
// import ModalPopUp from "../Body/ModalPopUp";
import { CgOrganisation } from "react-icons/cg";


function Home(){
    document.title = 'AvacaPharma - Home';
    return(
        <>
                <div className='landingpage'>
                <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Formulas+2160p+(Converted).mp4" 
                    autoPlay 
                    muted 
                    loop='true' 
                    className='video-bg' 
                    type="video/mp4"
                    poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+Home.png"
                />
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
                        <Link className='homeBtn' to="/patents">Know More</Link>
                </div>
                <CgOrganisation className="PageIcon"></CgOrganisation>
                <HomeContent></HomeContent>
                {/* <ModalPopUp></ModalPopUp> */}
        </>
    )
}

export default Home;