import { MdOutlineBiotech } from "react-icons/md";
import React from 'react';
import { Parallax } from 'react-parallax';
import { Helmet } from 'react-helmet';

const Technology = () => {
    const img = "https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/tablets.jpg";
    return(
        <>
            <Helmet>
                <title>Technology | AvacaPharma</title>
                <meta name="description" content="Technology used by AvacaPharma"/>
                <meta name="keywords" content="AvacaPharma technology, Synergix AI, Augumented Intelligence, 
                    Cellix Bio Pharma Technology, Cellix Bio Technology, Oral Liquids, Soild orals, Topicals, Parentals"
                />
            </Helmet>
            <div className='landingpage'>
                <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Brain+1440p.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    className='video-bg' 
                    type="video/mp4"
                    poster=""
                />
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>We embrace novel technologies and innovations that can impact millions of Patients</h1>
                    </div>
                </div>
            </div>
            <div>
                <MdOutlineBiotech className="PageIcon"></MdOutlineBiotech>
            </div>
            
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">TECHNOLOGY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">TECHNOLOGY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">TECHNOLOGY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">TECHNOLOGY</span>
                    </span>
                </h1>
            </div>

            <div className="TechContainer">
                <p>At AvacaPharma, we develop multiple dosage forms like OSDs, nasal sprays, oral sprays, ophthalmic solutions, emulsions, suspensions, injectable and topicals. At our state-of-the-art facility, we handle complex oral solid dosage forms, oral liquids, spray delivery, pulmonary delivery, topical and parenteral dosage forms like aqueous liquid injectables, non-aqueous liquid injectables, lyophilized injectables and ophthalmic solutions. </p>
                <p>We specialize in innovative dosage forms, fixed dose combinations and modified-release dosage forms. Our expert team is having extensive experience in developing complex formulations and provide tailored solutions to clinical unmet needs and patient compliance problems and help to optimize the development time and cost improving market access and commercial viability.</p>
                <p>Our team is committed to delivering quality results in a time-bound and cost-effective manner at each stage of the development process. We also evaluate container closure systems, storage, and transportation conditions.</p>
                <p>ICH-compliant stability studies along with a range of conditions to cover various climatic zones across the globe, help in making decisions early in the drug development cycle.</p>
            </div>
                <Parallax bgImage={ img } strength={400} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer5'>
                        <div className="ParallaxDivTech">
                            <h2>Dosage Forms</h2>
                        </div>
                    </div>
                </Parallax>
            <div className="TechContainer">
                <h2>Solid Orals</h2>
                <ul>
                    <li><span>Immediate-release tablets (chewable tablets, orally disintegrating tablets, sublingual tablets and bi-layer tablets)</span></li>
                    <li><span>Modified release tablets (monolayer, bilayer and mini tablets)</span></li>
                    <li><span>Fixed dose combinations (monolayer, Bilayer and Multi particulate systems (granules, pellets or mini-tablets and combinations there off in capsule))</span></li>
                    <li><span>Hard Capsules (hard gelatin or HPMC capsules with powder in capsule, pellets in capsules and soft gelatin capsules)</span></li>
                    <li><span>Multiparticulate systems (pellets and mini tablets)</span></li>
                    <li><span>Powder in sachet for solution or suspension</span></li>
                </ul>
                <h2>Oral Liquids</h2>
                <ul>
                    <li><span>Oral solutions with dosing cup</span></li>
                    <li><span>Oral drops with dosing device</span></li>
                    <li><span>Oral suspension</span></li>
                    <li><span>Oral emulsions</span></li>
                </ul>
                <h2>Parenterals</h2>
                <uL>
                    <li><span>Aqueous liquid injectables</span></li>
                    <li><span>Non-aqueous liquid injectables</span></li>
                    <li><span>Lyophilized injectables</span></li>
                    <li><span>Ophthalmic and otic solutions</span></li>
                    <li><span>Nasal solutions (drops to be instilled into nostrils)</span></li>
                </uL>
                <h2>Topicals</h2>
                <ul>
                    <li><span>Ointment</span></li>
                    <li><span>Cream</span></li>
                    <li><span>Gel</span></li>
                    <li><span>Lotions</span></li>
                </ul>
            </div>
        </>
    );
}
export default Technology;
