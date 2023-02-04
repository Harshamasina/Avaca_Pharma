import { MdOutlineBiotech } from "react-icons/md";
import { Helmet } from 'react-helmet';

const Technology = () => {
    return(
        <>
            <Helmet>
                <title>Technology | AvacaPharma</title>
                <meta name="description" content="Technology used by AvacaPharma"/>
                <meta name="keywords" content="AvacaPharma technology, Synergix AI, Augumented Intelligence, 
                    Cellix Bio Pharma Technology, Cellix Bio Technology,"
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
                        <h1 className='fg-text-h1'>Structure's platform unlocks the potential of GPCRs.</h1>
                        <p className='fg-text-p'>Our platform integrates multiple groundbreaking technologies designed to overcome the historical limitations of GPCR drug development.</p>
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
        </>
    );
}
export default Technology;