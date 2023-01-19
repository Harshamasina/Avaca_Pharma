import { FaRegCopyright } from "react-icons/fa";

function Patents(){
    document.title = 'AvacaPharma - Patents';
    return(
        <>
            <div className='landingpage'>
              <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Glass.PNG"className='video-bg' alt="Blue DNA"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>PATENTS FILED BY AAVACA PHARMA</h1>
                        <p className='fg-text-p'>Access the Patents filed by AvacaPharma after it was acquired by Cellix Bio Pharma</p>
                    </div>
                </div>
            </div>
            <div>
                <FaRegCopyright className="PageIcon"></FaRegCopyright>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                </h1>
            </div>
        </>
    )
}

export default Patents;