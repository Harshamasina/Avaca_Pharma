import { IoPersonAddOutline } from "react-icons/io5";

function Careers(){
    return(
        <>
            <div className='landingpage'>
              <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Analysis.jpg"className='video-bg' alt="Blue DNA"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>You will be vital contributor to our inspiring journey</h1>
                        <p className='fg-text-p'>We empower our people to take charge of their potential.</p>
                    </div>
                </div>
            </div>
            
            <div>
                <IoPersonAddOutline className="PageIcon"></IoPersonAddOutline>
            </div>
            
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">CAREERS</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">CAREERS</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">CAREERS</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">CAREERS</span>
                    </span>
                </h1>
            </div>

            <div className="CareersText">
                <p><span>AvacaPharma </span>employees and teams apply sound formulation science and medicinal chemistry to design, develop and deliver medicines that focus on unmet medical needs around the world. Here, everyone matters and you will be a vital contributor to our inspiring, bold mission. You will help make an impact on people's lives and change futures every day. We are equally committed to bringing out your best and fostering a collaborative workplace built on trust and respect. We empower our people to take charge of their potential. We offer training and leadership development programs tailored to help you build valuable skills and succeed in your career. As you discover your potential, your professional and personal future will become brighter.</p>
                <p>Forward your CV / Resume : <span>info@cellixbiopharma.com</span></p>
                <p>AVACA Pharma <a href="www.avacapharma.com">[ www.avacapharma.com ]</a> is a <span>Cellix Bio Pharma company</span> <a href="www.cellixbiopharma.com">  [ www.cellixbiopharma.com ] </a></p>
            </div>

            {/* <div className="CareersDetails">
                <h2>Current Openings</h2>
                <div className="CareersDetailsContainer">
                    <div>
                        <h2>Analytical R&D : Scientist</h2>
                        <h3>Job description :</h3>
                        <ul>
                            <li>Performing analytical method validation/ raw material/ finished product analysis/</li>
                            <li>Performing assay by using HPLC</li>
                            <li>To perform analysis related to Method Transfer and Analytical Method Verification</li>
                            <li>Preparing method validation protocols & reporting.</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Careers;