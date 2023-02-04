import React from 'react';
import { Parallax } from 'react-parallax';
import { MdOutlineScience } from "react-icons/md";
import { Helmet } from 'react-helmet';

function Discovery(){
    const img = "https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Data.jpg";
    return(
        <>
            <Helmet>
                <title>Discovery | AvacaPharma</title>
                <meta name="description" content="Discover AvacaPharma at a glance"/>
                <meta name="keywords" content="Discovery AvacaPharma, 
                    Medicinal Chemistry, 
                    synthetic Team, Avaca Analytical Team, potency, DMPK related issues, safety-related issues,
                    selectivity, off-target activity, physicochemical properties"
                />
            </Helmet>
            <div className='landingpage'>
            <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Virus.mp4" 
                autoPlay 
                muted 
                loop 
                className='video-bg' 
                type="video/mp4"
                poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+Discovery.png"
            />
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>Highly differentiated products requires early translation of breakthrough science</h1>
                        {/* <p className='fg-text-p'>Provides Support to Discovery and Process Chemistry</p> */}
                    </div>
                </div>
            </div>
            <div>
                <MdOutlineScience className="PageIcon"></MdOutlineScience>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">DISCOVERY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">DISCOVERY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">DISCOVERY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">DISCOVERY</span>
                    </span>
                </h1>
            </div>

            <div className="DiscoveryContainer">
                <div className="DiscoveryHeading">
                    <h3><span>DISCOVERY </span>CHEMISTRY AT A GLANCE:</h3>
                </div>
                <div className="DiscoverUL1">
                    <ul>
                        <li>Proficient across a variety of synthetic chemistries, such as heterocyclic, asymmetric, microwave, enzymatic, multi-step synthesis, carbohydrate, nucleotide & nucleoside</li>
                        <li>Medicinal chemistry team leverage their expertise in driving the new drug discovery projects and generate IP secured drug candidates for clients</li>
                        <li>Enhancement of Computational team efforts with machine learning and artificial intelligence</li>
                        <li>Proven track record to drive projects from concept to hit identification, hit to lead, lead optimization and candidate selection</li>
                        <li>Analytical Chemistry is an integrated part of all projects and offered singularly, for unique requirements too</li>
                    </ul>
                </div>
                <div className="DiscoveryContainer"></div>
                <p>The synthetic team is skilled to undertake challenges in synthetic organic chemistry, involving various types of chemistry - heterocyclic, asymmetric, microwave, enzymatic, multi-step synthesis, carbohydrate, nucleotide & nucleoside - to deliver compounds to customer requirements.</p>
            </div>
                <div className="DiscoveryParallax">
                    <Parallax bgImage={ img } strength={400} bgImageAlt="parallaximg" blur={1}>
                        <div className='ParallaxContainer'>
                            <div className="ParallaxDiv">
                                <div className="DiscoverUL2">
                                    <ul>
                                        <li>Complex molecules from grams to multi kilos</li>
                                        <li>Reference compounds and scaffold synthesis</li>
                                        <li>Small molecules; Analogues for lead generation; Lead optimization</li>
                                        <li>Focused libraries : 50-200</li>
                                        <li>Large libraries : greater than 1,000</li>
                                        <li>Multi-step stereoselective synthesis of chiral molecules</li>
                                        <li>Expertise in handling photo-chemical reactions</li>
                                        <li>Chemoenzymatic and resolution techniques for chiral molecules</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
                <div className="DiscoveryContainer">
                    <p>The medicinal chemistry team has a performance history of solving the various problems often encountered during the optimization discovery process, such as potency, selectivity, off-target activity, physicochemical properties, DMPK related issues, safety-related issues and such. They have accumulated expertise in various therapeutic areas over the years, including, but not limited to, oncology, metabolic disorders, inflammation and CNS.</p>
                    <p>The analytical team provides support to discovery and process chemistry groups as an integrated service or a stand-alone option for our customers. Our unique approach allows us to identify and evaluate the chemical in our analytical testing laboratories rapidly and effectively communicate the resulting data to help our customers understand the product's chemistry.</p>
                </div>
        </>
    )
}

export default Discovery;