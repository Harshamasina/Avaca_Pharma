import { RiTeamLine } from "react-icons/ri";
import { Helmet } from 'react-helmet';

const Teams = () => {
    return(
        <>
            <Helmet>
                <title>Teams | AvacaPharma</title>
                <meta name="description" content="FRD and ARD in AvacaPharma"/>
                <meta name="keywords" content="Analytical and research department, Formulation and research department,
                    chemical research and department, ARD, FRD, CRD, AvacaPharma Employees, "
                />
            </Helmet>
            <div className='landingpage'>
                <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/connection.mp4" 
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
                        <h1 className='fg-text-h1'>We profoundly collaborate and work towards building a Global Innovative Company</h1>
                    </div>
                </div>
            </div>
            <div>
                <RiTeamLine className="PageIcon"></RiTeamLine>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">TEAMS</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">TEAMS</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">TEAMS</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">TEAMS</span>
                    </span>
                </h1>
            </div>
            <div className="Teams-container">
                <div className="Teams-img1">
                    <h3>Analytical Team</h3>
                    <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+1+-+1.jpg" alt="Team 1"></img>
                </div>
                <div className="Teams-img1">
                    <h3>Formulation Team</h3>
                    <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+10+(2).jpg" alt="Team 1"></img>
                </div>
                <div className="Teams-img2">
                    <h3>Chemical R&D Team</h3>
                    <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+4.jpg" alt="Team 1"></img>
                </div>
                <div className="Teams-img2">
                    <h3>QA Team</h3>
                    <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+11.jpg" alt="Team 1"></img>
                </div>
                <div className="Teams-img2">
                    <h3>Office Admin</h3>
                    <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+12.jpg" alt="Team 1"></img>
                </div>
            </div>
        </>
    );
}

export default Teams;