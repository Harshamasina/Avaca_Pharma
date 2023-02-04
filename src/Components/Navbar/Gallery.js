import { useState } from "react";
import { RiGalleryLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet';

function Gallery(){
    let data = [
        // {
        //     id: 1,
        //     imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+1+Crop.jpg',
        // },
        {
            id: 2,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+2_2.jpg',
        },
        {
            id: 3,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+3_2.jpg',
        },
        {
            id: 4,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+4_2.jpg',
        },
        {
            id: 5,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+5_2.jpg',
        },
        {
            id: 6,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+6_2.jpg',
        },
        {
            id: 7,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+7_2.jpg',
        },
        {
            id: 8,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+8.jpg',
        },
        {
            id: 9,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+9.jpg',
        },
        // {
        //     id: 10,
        //     imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+10.jpg',
        // },
        {
            id: 11,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+11.jpg',
        },
        {
            id: 12,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+12.jpg',
        },
        {
            id: 13,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+13.jpg',
        },
        {
            id: 14,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+14.jpg',
        },
        {
            id: 15,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+15.jpg',
        },
        {
            id: 16,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+16.jpg',
        },
        {
            id: 17,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+17.jpg',
        },
        {
            id: 18,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+18.jpg',
        },
        {
            id: 19,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+19.jpg',
        },
        {
            id: 20,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+20.jpg',
        },
        {
            id: 21,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+21.jpg',
        },
        {
            id: 22,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+22.jpg',
        },
        {
            id: 23,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+23.jpg',
        },
        {
            id: 24,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+24.jpg',
        },
        {
            id: 25,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+25.jpg',
        },
        {
            id: 26,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+26.jpg',
        },
        {
            id: 27,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+27.jpg',
        },
        {
            id: 28,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+28.jpg',
        },
        {
            id: 29,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+29.jpg',
        },
        {
            id: 30,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+30.jpg',
        },
        {
            id: 31,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+31.jpg',
        },
        {
            id: 32,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+32.jpg',
        },
        {
            id: 33,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+33.jpg',
        },
        {
            id: 34,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+34.jpg',
        },
        {
            id: 35,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+35.jpg',
        },
        {
            id: 36,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+36.jpg',
        },
        {
            id: 37,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+37.jpg',
        },
        {
            id: 38,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+38.jpg',
        },
        {
            id: 39,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+39.jpg',
        },
        {
            id: 40,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+40.jpg',
        },
        {
            id: 41,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+41.jpg',
        },
        {
            id: 42,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+42.jpg',
        },
        {
            id: 43,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+43.jpg',
        },
        {
            id: 45,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+45.jpg',
        },
        {
            id: 46,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+46.jpg',
        },
        {
            id: 47,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Lab+-+47.jpg',
        },
    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return(
        <>
            <Helmet>
                <title>Gallery | AvacaPharma</title>
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
            <div className="GalleryContent"><h2>Welcome to <span>AvacaPharma</span> R&D</h2></div>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} alt="LabPics"></img>
                <IoCloseOutline className="CloseLabIcon" onClick={() => setModel(false)}></IoCloseOutline>
            </div> 
            <div className="WebGallery">
                {data.map((item, index) => {
                    return(
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={index} style={{width: '100%'}} loading="lazy"></img>
                        </div>
                    );
                })}
            </div>

            <div className="VideoContainer">
                <h2><a href="https://player.vimeo.com/video/332239306?h=f9bd29e595" target="_blank" rel="noreferrer">WATCH AVACAPHARMA COMMERCIAL OPERATIONS (GMP)</a></h2>
            </div>
        </>
    )
}

export default Gallery;