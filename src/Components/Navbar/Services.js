import React from 'react';
import { Parallax } from 'react-parallax';
import { SlChemistry } from "react-icons/sl";
import { BsMinecartLoaded } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";

function Services(){
    const img = "https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Glass.PNG";
    document.title = 'AvacaPharma - Services';
    return(
        <>
            <div className='landingpage'>
            <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Labaratory.mp4" 
                autoPlay 
                muted 
                loop 
                className='video-bg' 
                type="video/mp4"
                poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+services.png"
            />
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>Innovate model is a highly efficient way of translating ground breaking science into product opportunities not only in terms of timelines but also costs</h1>
                        {/* <p className='fg-text-p'>Avaca Pharma has it all covered for you. Our focused strategies place your products first.</p> */}
                    </div>
                </div>
            </div>
            <div>
                <RiServiceLine className="PageIcon"></RiServiceLine>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">SERVICES</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">SERVICES</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">SERVICES</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">SERVICES</span>
                    </span>
                </h1>
            </div>

            <div className="servicesContainer">
                <h3>AvacaPharma has developed a unique CDMO program to deliver the best client experience. Come experience our difference!</h3>
                <h3>Medicinal Chemistry Services</h3>
            </div>
            <div className="DiscoveryParallax">
                <Parallax bgImage={ img } strength={350} bgImageAlt="parallaximg" blur={3}>
                    <div className='ParallaxContainer3'>
                        <div className="ParallaxDiv">
                            <div className="DiscoverUL2">
                                <ul>
                                    <li>Design and synthesis of novel chemical entities in drug discovery programs such as target to hit, hit to lead and lead optimization SAR studies</li>
                                    <li>Designing novel chemical entities (in collaboration with Silico Molecular Modelling Group)</li>
                                    <li>Biological profiling of the designed compounds (In collaboration with our in-vitro and in-vivo biology groups)</li>
                                    <li>Structural directed design in drug discovery program (in collaboration with the X-ray Crystallography Group)</li>
                                    <li>IPR evaluation of the scaffolds</li>
                                    <li>Complex molecules from grams to multi kilos</li>
                                    <li>Reference compounds and scaffold synthesis</li>
                                    <li>Small molecules; Analogues for lead generation; Lead optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
            <div className="servicesTableContainer">
                <div className="servicesTable">
                    <SlChemistry className="servicesIcon"></SlChemistry>
                    <h3>FORMULATION DEVELOPMENT</h3>
                    <p>We have highly skilled, experienced personnel with modern equipment's within our formulation lab in tune with latest formulation and technology innovations. Development capabilities include: ANDA, NCE, 505 (b) 2, pre-clinical toxicology, late stage clinical formulations.</p>
                    <ul>
                        <li>Drug-excipient compatibility study</li>
                        <li>Dry blending</li>
                        <li>High sheer granulation</li>
                        <li>Fluid bed granulation (Top spray)</li>
                        <li>Palletization (Wurster coating)</li>
                        <li>Roller compaction</li>
                        <li>Encapsulation</li>
                        <li>Lyophylization</li>
                        <li>Scale up and technology transfer</li>
                        <li>DoE Studies and many more</li>
                    </ul>
                </div>
                
                <div className="servicesTable">
                    <GiGears className="servicesIcon"></GiGears>
                    <h3>ANALYTICAL DEVELOPMENT</h3>
                    <p>Our analytical services laboratory is fully equipped with skilled analytical team. The lab provides method development, formulation, stability study support. The lab maintains access controls, tractability and and systems to ensure integrity of data generated.</p>
                    <ul>
                        <li>Solubility studies</li>
                        <li>Dissolution studies</li>
                        <li>Method development</li>
                        <li>Method validation</li>
                        <li>Method transfers</li>
                        <li>Stability studies and many more.</li>
                    </ul>
                </div>
                
                <div className="servicesTable">
                    <BsMinecartLoaded className="servicesIcon"></BsMinecartLoaded>
                    <h3>COMMERCIAL SUPPLY</h3>
                    <p>The upcoming commercial site will house modern manufacturing technologies providing operational flexibility. The cGMP site will include manufacturing, packaging, analytical testing and warehousing operations. AvacaPharma also provide project management, regulatory CMC, quality and technical services support to clients.</p>
                    <ul>
                        <li>Manufacturing</li>
                        <li>Packaging</li>
                        <li>QC testing</li>
                        <li>Warehousing</li>
                        <li>Distribution</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Services;