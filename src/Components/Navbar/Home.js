import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HomeContent from "../Body/HomeContent";
import { CgOrganisation } from "react-icons/cg";
// import ParallaxContent from '../Body/ParallaxContent';
import { Helmet } from 'react-helmet';
import { Modal } from 'react-bootstrap';
import { MdClose } from "react-icons/md";

function Home(){
    const [showModal, setShowModal] = useState(true);

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return(
        <>
            <Helmet>
                <title>Home | AvacaPharma</title>
                <meta name='description' content="Avaca Pharma is developing novel formulation and targeted delivery technologies to improve clinical outcomes of various dosage forms.
                    Advancing drug discovery by applying the precise medicinal chemistry approaches to deliver superior drug candidates."
                />
                <meta name='keywords' content="AvacaPharma Home, AvacaPharma Home page, What is AvacaPharma"/>
            </Helmet>
            {
                showModal && (
                    <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static" keyboard={false}>
                        <Modal.Body>
                            <div className='ModalBody'>
                                <h4>AVACA PHARMA</h4>
                                <p>An Operating Subsidiary of Cellix Bio Pharma</p>
                                <a href='https://www.cellixbiopharma.com/' target="_blank" rel="noreferrer"><img src='https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/cbp+-+2.png' alt='cbp' /></a>
                                <p>And Cellix Bio</p>
                                <a href='https://www.cellixbio.com/' target="_blank" rel="noreferrer"><img src='https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Icon.png' alt='cbp' /></a>
                                <span onClick={handleCloseModal}> <MdClose /></span>
                            </div>
                        </Modal.Body>
                    </Modal>
                )
            }
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
                    <Link className='homeBtn' to="/patents" rel='canonical'>Know More</Link>
            </div>
            <CgOrganisation className="PageIcon"></CgOrganisation>
            <HomeContent></HomeContent>
            {/* <ParallaxContent></ParallaxContent> */}
        </>
    )
}

export default Home;