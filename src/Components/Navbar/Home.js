import React from 'react';
import { Link } from "react-router-dom";
import HomeContent from "../Body/HomeContent";
// import ModalPopUp from "../Body/ModalPopUp";
import { CgOrganisation } from "react-icons/cg";
import ParallaxContent from '../Body/ParallaxContent';
import { Helmet } from 'react-helmet';

function Home(){
    return(
        <>
                <Helmet>
                    <title>Home | AvacaPharma</title>
                    <meta name='description' content="AvacaPharma's Home Page"/>
                    <meta name='keywords' content="AvacaPharma Home, AvacaPharma Home page, What is AvacaPharma"/>
                </Helmet>
                <div className='landingpage'>
                    <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Formulas+2160p+(Converted).mp4" 
                        autoPlay 
                        muted 
                        loop
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
                <ParallaxContent></ParallaxContent>
        </>
    )
}

export default Home;