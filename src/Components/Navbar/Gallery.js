import { RiGalleryLine } from "react-icons/ri";
import { Helmet } from 'react-helmet';
import Certificate from "../Body/Certificate";
import LabPics from "../Body/LabPics";

function Gallery(){
    return(
        <>
            <Helmet>
                <title>Gallery | AvacaPharma</title>
                <meta name="description" content="AvacaPharma's Labaratories"/>
                <meta name="keywords" content="AvacaPharma Certificates, AvacaPharma Documents, AvacaPharma Employees" />
            </Helmet>
            <div className='landingpage'>
            <video 
                src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/oil+abstarct.mp4" 
                autoPlay 
                muted 
                loop 
                className='video-bg' 
                type="video/mp4"
                poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+Gallery.png"
            />
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>Scientific expertise, Technology, Innovation and Problem solving along with our strong fundamentals on sustainability, compliance and IP security</h1>
                    </div>
                </div>
            </div>

            <div>
                <RiGalleryLine className="PageIcon"></RiGalleryLine>
            </div>

            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">GALLERY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">GALLERY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">GALLERY</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">GALLERY</span>
                    </span>
                </h1>
            </div>
            <div className="GalleryContent"><h2>Welcome to AvacaPharma</h2></div>
            <Certificate></Certificate>
            <LabPics></LabPics>
            <div className="VideoContainer">
                <h2><a href="https://player.vimeo.com/video/332239306?h=f9bd29e595" target="_blank" rel="noreferrer">WATCH AVACAPHARMA COMMERCIAL OPERATIONS (GMP)</a></h2>
            </div>
        </>
    )
}

export default Gallery;