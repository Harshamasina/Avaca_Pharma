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
                                    <h1 className='Carouselh1'>Avaca Pharma is a leader in the application of science and data driven methodologies</h1>
                                </div>
                                
                                <div>
                                    <h1 className='Carouselh1'>Integrated Formulation Dosage Forms Development and Analytical Facility</h1>
                                </div>

                                {/* <div>
                                    <h1 className='Carouselh1'>Novel Drug Discovery and Medicinal Chemistry Capabilities</h1>
                                </div> */}
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