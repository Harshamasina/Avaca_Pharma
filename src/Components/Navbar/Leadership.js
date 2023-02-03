import { MdOutlineLeaderboard } from "react-icons/md";

function Leadership(){
    document.title = 'AvacaPharma - Leadership';
    return(
        <>
            <div className='landingpage'>
                <video src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/Bulbs.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    className='video-bg' 
                    type="video/mp4"
                    poster=""
                />
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>SCIENCE BACKED DATA DRIVEN DECISION MAKING FOR PRODUCT AND DEVELOPMENT</h1>
                        <p className='fg-text-p'>Established AvacaPharma with a vision to Innovate for Better Health.</p>
                    </div>
                </div>
            </div>
            <div>
                <MdOutlineLeaderboard className="PageIcon"></MdOutlineLeaderboard>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">LEADERSHIP</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">LEADERSHIP</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">LEADERSHIP</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">LEADERSHIP</span>
                    </span>
                </h1>
            </div>

            <div className="LeadershipContainer">
                <img className="LeaderImg" src="https://cellixbio-assets.s3.ap-south-1.amazonaws.com/Web+Images/CellixBio.Leadership.Mahesh.PNG" alt="leader"></img>
                <div className="LeaderContent">
                    <h1>MAHESH KANDULA, MANAGING DIRECTOR & CEO</h1>
                    <h2>Drug Design and Development, Innovation & IP Founder</h2>
                    <p>Mahesh brings over 18 years of scientific and entrepreneurial experience in the life science industry. Mr. Kandula has been named an inventor on 180+ United States Patents and Applications and, more than 640+ International Patent Applications. Mr. Kandula received his Master of Technology degree from IIT Kharagpur.</p>
                </div>
            </div>
        </>
    )
}

export default Leadership;