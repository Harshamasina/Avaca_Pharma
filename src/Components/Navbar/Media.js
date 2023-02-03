import { HiOutlineNewspaper } from "react-icons/hi";

function Media(){
    document.title = 'AvacaPharma - Media';
    return(
        <>
            <div className='landingpage'>
                <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Media.mp4" autoPlay muted loop className='video-bg' type="video/mp4"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>STREAMLINED OPERATIONAL SUPPORT AND MATERIAL FLOW</h1>
                        <p className='fg-text-p'>Modernizing commercial supply operations</p>
                    </div>
                </div>
            </div>
            <div>
                <HiOutlineNewspaper className="PageIcon"></HiOutlineNewspaper>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">MEDIA</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">MEDIA</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">MEDIA</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">MEDIA</span>
                    </span>
                </h1>
            </div>
            <div>
                <div className="MediaContainer1">
                    <img className="MediaImg" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Media.BS.png" alt="media"></img>
                    <div className="MediaContent">
                        <div>
                            <h2><a href="https://www.businesswire.com/news/home/20200804006078/en/Cellix-Bio-Pharma-Completes-Acquisition-Avaca-Pharma">CELLIX BIO PHARMA COMPLETES THE ACQUISITION OF AVACA PHARMA</a></h2>
                        </div>
                        <div>
                            <h5>August 04, 2020 06:30 PM HYDERABAD, India--(BUSINESS WIRE)</h5>
                        </div>
                        <div>
                            <p>Cellix Bio Pharma completes the acquisition of Avaca Pharma, a formulation development company. Avaca Pharma services include discovery, formulation development, regulatory support, and product development activities.</p>
                            <p>The acquisition of Avaca Pharma provides Cellix Bio Pharma with world-class expertise in NME/NCE discovery R&D services and a unique and extensive set of high-content and complex formulations. Combined with Cellix Bio's established small molecule discovery and drug development capabilities, this expansion uniquely positions Cellix Bio Pharma as a leading provider of integrated R&D services across large and small molecule platforms a base for further expansion.</p>
                            <p>With a vision of an innovative approach of execution, exceptional customer service, and focus on providing value, Cellix Bio Pharma is delighted to offer expanded leading-edge service solutions.</p>
                            <p>Avaca Pharma Research and Development Centre (RDC) at IDA Pashamylaram, Hyderabad, has a total high-quality, compliant space of 6000 sq. ft. in a 1.2-acre location, of which Formulation R&D occupies 3000 sq. ft. and Analytical Operations, 3000 sq. ft., with provisions for expansion</p>
                            <p>Avaca Pharma Commercial Operations Centre (COC) is located between Hyderabad and Vijayawada, Andhra Pradesh. The new planned construction will host commercial manufacturing, packaging, analytical, and warehousing facilities within the 14 acres environmentally friendly campus. The facility will have a total built-up cGMP space of 126,685 sq.ft. meeting regulatory compliance standards.</p>
                            <p><a href="https://www.businesswire.com/news/home/20200804006078/en/Cellix-Bio-Pharma-Completes-Acquisition-Avaca-Pharma">Read More</a></p>
                        </div>
                    </div>
                </div>

                <div className="MediaContainer2">
                    <img className="MediaImg" src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+logo+Plain.png" alt="media"></img>
                    <div className="MediaContent">
                        <div>
                            <h2>CELLIX BIO PHARMA INITIATES ACQUISITION OF AVACA PHARMA: FORMULATION DEVELOPMENT CRO</h2>
                        </div>
                        <div>
                            <h5> 06-March-2020 Hyderabad</h5>
                        </div>
                        <div>
                            <p>Cellix Bio Pharma initiates the acquisition of Avaca Pharma, a formulation development CRO. Avaca Pharma services include discovery, formulation development, regulatory support, and product development activities.</p>
                            <p>The acquisition of Avaca Pharma provides Cellix Bio Pharma with world-class expertise in NME/NCE discovery R&D services and a unique and extensive set of high-content and complex formulations. Combined with Cellix Bio's established small molecule discovery and development capabilities, this expansion uniquely position Cellix Bio Pharma as a leading provider of integrated R&D services across both large and small molecule platforms and provides a base for further expansion.</p>
                            <p>With a shared vision of an innovative approach to execution, exceptional customer service, and focus on providing value, Cellix Bio Pharma is delighted to offer expanded leading-edge service solutions to our clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Media;