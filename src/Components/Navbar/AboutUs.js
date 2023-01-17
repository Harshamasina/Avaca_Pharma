import { BsPeople } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BsGear } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
// import { CiMoneyCheck1 } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';

function AboutUS(){
    return(
        <>
            <div className='landingpage'>
              <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Research.PNG"className='video-bg' alt="Blue DNA"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>AVACAPHARMA MAKES YOUR BUSINESS SIMPLE AND CUSTOMIZABLE</h1>
                        <p className='fg-text-p'>An integrated R&D business model to support your product development</p>
                    </div>
                </div>
            </div>
            <div>
                <BsPeople className="PageIcon"></BsPeople>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">ABOUT US</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">ABOUT US</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">ABOUT US</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">ABOUT US</span>
                    </span>
                </h1>
            </div>
            <div className="AboutUsText">
                <p><span>AvacaPharma, </span>a next generation pharmaceutical development and commercialization organization.</p>
            </div>
            <div className="AboutUsTable">
                <div className="AboutUsTableContent">
                    <div>
                        <FaEye className="servicesIcon"></FaEye>
                    </div>
                    <div>
                        <h2>VISION</h2>
                        <p>To become a globally recognized pharmaceutical development organization by 2025.</p>
                    </div>
                </div>
                <div className="AboutUsTableContent">
                    <div>
                        <BsGear className="servicesIcon"></BsGear>
                    </div>
                    <div>
                        <h2>MISSION</h2>
                        <p>Our mission is innovate for better health that includes tons of optimized knowledge that are completely customizable and deliver unmatched product.</p>
                    </div>
                </div>
                <div className="AboutUsTableContent">
                    <div>
                        <MdOutlineContentCopy className="servicesIcon"></MdOutlineContentCopy>
                    </div>
                    <div>
                        <h2>VALUES</h2>
                        <ul>
                            <li>Adhering to patient centricity.</li>
                            <li>Valuing our stakeholders.</li>
                            <li>Applying QbD principles.</li>
                            <li>Caring our environment.</li>
                            <li>Acting with integrity.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="AboutUsAcc">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>FACILITIES</Accordion.Header>
                        <Accordion.Body>
                            <h3>FACILITIES</h3>
                            <h4>AvacaPharma Research and Development Center (RDC) and Commercial Operations Center (COC)</h4>
                            <div>
                                <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU-+1.jpg" alt="au"></img>
                                <p>AvacaPharma Research and Development Center (RDC) at IDA Pashamylaram, Hyderabad, has a total cGMP space of 6000 Sq. ft. in a 1.2-acre location, of which Formulation occupies 3000 sq. ft. and Analytical Operations 3000 sq. ft. with provisions for expansion.</p>
                            </div>
                            <p>AvacaPharma Commercial Operations Center (COC) is located between Hyderabad and Vijayawada, Andhra Pradesh, and will host commercial manufacturing, packaging, analytical, and warehousing facilities within the 15 acres environmentally friendly campus. The facility will have a total built up cGMP space of 126,685 sq.ft. meeting regulatory compliance standards.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>R&D BUSINESS VERTICALS</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D BUSINESS VERTICALS</h3>
                            <h4>An integrated R&D business model to support your product</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU-+2.PNG" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>R&D DOSAGE FORM CAPABILITY</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D DOSAGE FORM CAPABILITY</h3>
                            <h4>Formulation and process development</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+3.png" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>SUPPORTING SUBMISSION PATHWAYS</Accordion.Header>
                        <Accordion.Body>
                            <h3>SUPPORTING SUBMISSION PATHWAYS</h3>
                            <h4>Your strategic fast to file product development partner for regulated markets</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+4.png" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>CGMP FORMULATION FACILITY</Accordion.Header>
                        <Accordion.Body>
                            <h3>CGMP FORMULATION FACILITY</h3>
                            <h4>Ample formulation development and warehouse space.</h4>
                            <div>
                                <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+5.jpg" alt="au"></img>
                                <ul>
                                    <li>Pre-formulation (solubility, flow, stability profile).</li>
                                    <li>Granulation (horizontal high-shear granulator).</li>
                                    <li>Fluid bed processing (top spray, bottom spray).</li>
                                    <li>Compression suite (PLC with HMI controls, compression, ejection force monitoring, compaction force control)</li>
                                    <li>In-process testing (weight variation, friability, hardness, thickness, disintegration).</li>
                                    <li>Coating suite (Ganscoater 2kg). Packaging (bottle and blister).</li>
                                </ul>
                            </div>
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>R&D PROCESSING EQUIPMENT</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D PROCESSING EQUIPMENT</h3>
                            <h4>Granulation technologies that fit.</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+6.jpg" alt="au"></img>
                            <ul>
                                <li>Prism high shear mixer granulator 2/5/10 L (Dry and Wet Powder Mixing).</li>
                                <li>Prism bin blender: 2/5/10 L (15° inclined position, rotates for with 3 dimension action).</li>
                                <li>Prism vibratory sifter (with base plate centrally attached to gyratory motor).</li>
                                <li>ACG GPCG1.1 fluid bed processor (top spray and bottom-spray Wurster configurations for drying, granulation and pellet coating).</li>
                                <li>Kambert Compression machine 8 stations (turret with lower punch keyway for various depth of fill lower cam tracks, feeding system for MUPS)</li>
                                <li>Gansons Coating machine 2 kg (coating drum with countersunk perforation, baffle design block air, thus reducing drying efficiency and increasing spray bounce-back).</li>
                                <li>Labindia disintegration, hardness, friability, tap density tester</li>
                                <li>EzeeBlist blister packing machine (equipped with cam mechanism, PVC- ALU, PVDC - ALU, PVC - ACLAR and ALU-ALU).</li>
                                <li>Sigma Pro GMP induction cap sealer (semi-automatic, 20mm to 120mm diameter).</li>
                                <li>Electrolab USP leak test apparatus 300 mm.</li>
                                <li>Compressed air machine 45 CFM.</li>
                                <li>Diesel generator set 82.5 KVA.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>R&D ANALYTICAL DEVELOPMENT</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D ANALYTICAL DEVELOPMENT</h3>
                            <h4>Robust AQbD based analytical development program</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+7.PNG" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>R&D ANALYTICAL FACILITY</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D ANALYTICAL FACILITY</h3>
                            <h4>Ample analytical development space</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+8.PNG" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>R&D ANALYTICAL INSTRUMENTS</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D ANALYTICAL INSTRUMENTS</h3>
                            <h4>Excipient, API, formulation, cleaning, stability testing</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+9.PNG" alt="au"></img>
                            <ul>
                                <li>Advanced microcontroller dissolution test apparatus.</li>
                                <li>Waters High performance liquid chromatography (HPLC): PDA.</li>
                                <li>Waters High performance liquid chromatography (HPLC): UV.</li>
                                <li>Perkin Elmer Perking UV-Vis spectrophotometer.</li>
                                <li>Perkin Elmer Fourier Transform-Infrared spectroscopy (FTIR)</li>
                                <li>Metrohm Karl fisher titrator.</li>
                                <li>Milli-Q water system: Type 1 and 2 water.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>R&D ANALYTICAL CONTROLS</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D ANALYTICAL CONTROLS</h3>
                            <h4>Method development and validation</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+10.PNG" alt="au"></img>
                            <ul>
                                <li>Biometric access controls (facility, lab, instrumentation room).</li>
                                <li>Dry hot air oven (80 liters).</li>
                                <li>Standalone system controls (printer, access, logbook).</li>
                                <li>Secure data servers (empower, documentation)</li>
                                <li>Mettler pH meters, conductivity meter.</li>
                                <li>Muffle furnace (under fume hood).</li>
                                <li>Software: empower 3, eLNB.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                        <Accordion.Header>ICH STABILITY CHAMBERS</Accordion.Header>
                        <Accordion.Body>
                            <h3>ICH STABILITY CHAMBERS</h3>
                            <h4>Stability studies to support product development</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+11.PNG" alt="au"></img>
                            <ul>
                                <li>Zone I, II, III, IV, IVb</li>
                                <li>25 ±2°C / 60 ±5%RH- Long term</li>
                                <li>35 ±2°C / 65 ±5%RH- Intermediate</li>
                                <li>40 ±2°C / 75 ±5%RH- Accelerated</li>
                                <li>Stand By for all above conditions</li>
                                <li>Qualified Newtronic stability chambers</li>
                                <li>Real-time monitoring software</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="11">
                        <Accordion.Header>R&D QUALITY</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D QUALITY</h3>
                            <h4>Committed to a higher level of control</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+12.PNG" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="12">
                        <Accordion.Header>R&D PROCESS FOCUS</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D PROCESS FOCUS</h3>
                            <h4>Customer Focused</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU-+13.PNG" alt="au"></img>
                            <ul>
                                <li>Understanding customer requirements.</li>
                                <li>New technology adoption and capability development.</li>
                                <li>Project cost containment.</li>
                                <li>Assured IP protection process.</li>
                                <li>Transparent communication and responsiveness.</li>
                                <li>Ensuring integrity through controls.</li>
                                <li>Meeting project deliverable through PM.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="13">
                        <Accordion.Header>R&D SERVICES SUMMARY</Accordion.Header>
                        <Accordion.Body>
                            <h3>R&D SERVICES SUMMARY</h3>
                            <h4>Your strategic product development partner for regulated markets</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+14.png" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="14">
                        <Accordion.Header>MATURITY MODEL</Accordion.Header>
                        <Accordion.Body>
                            <h3>MATURITY MODEL</h3>
                            <h4>Matrix organization delivering value</h4>
                            <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/AU+-+15.png" alt="au"></img>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}

export default AboutUS;