import React, { useState } from "react";
import { RiTeamLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { Helmet } from 'react-helmet';

const Teams = () => {
    const data = [
        {
            id: 1,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+1+-+1.jpg'
        },
        {
            id: 2,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+2.jpg'
        },
        {
            id: 3,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+3.jpg'
        },
        {
            id: 3,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+10+(2).jpg'
        },
        {
            id: 4,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+5.jpg'
        },
        {
            id: 5,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+6.jpg'
        },
        {
            id: 6,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+7.jpg'
        },
        {
            id: 7,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+8.jpg'
        },
        {
            id: 8,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+9.jpg'
        },
        {
            id: 9,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+4.jpg'
        },
        {
            id: 10,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+11.jpg'
        },
        {
            id: 11,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Team+12.jpg'
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
                        <h1 className='fg-text-h1'>Constantly striving to set new benchmarks are at the core of our success</h1>
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
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} alt="LabPics"></img>
                <IoCloseOutline className="CloseLabIcon" onClick={() => setModel(false)}></IoCloseOutline>
            </div>
            <div class="slider">
                <input type="radio" name="slide" id="slide-1" checked></input>
                <input type="radio" name="slide" id="slide-2"></input>

                <div class="slides">
                    <div class="slide slide-1">
                        <div class="slide-data">
                            <h1>ANALYTICAL AND RESEARCH DEPARTMENT</h1>
                        </div>
                    </div>
                    <div class="slide slide-2">
                        <div class="slide-data">
                            <h1>FORMULATION AND RESEARCH DEPARTMENT</h1>
                        </div>
                    </div>
                </div>

                <div class="arrows arrow-left">
                    <label for="slide-2">
                        <span><i class="fas fa-angle-left"></i></span>
                    </label>
                    <label for="slide-1">
                        <span><i class="fas fa-angle-left"></i></span>
                    </label>
                </div>

                <div class="arrows arrow-right">
                    <label for="slide-2">
                        <span><i class="fas fa-angle-right"></i></span>
                    </label>
                    <label for="slide-1">
                        <span><i class="fas fa-angle-right"></i></span>
                    </label>
                </div>

                <div class="dots">
                    <label for="slide-1"></label>
                    <label for="slide-2"></label>
                </div>
            </div>
            <div className="TeamsContainer">
                {
                    data.map((item, index) => {
                        return(
                            <div>
                                <div key={index} onClick={() => getImg(item.imgSrc)} className="grid-images">
                                    <img src={item.imgSrc} alt={index} style={{width: '100%'}} loading="lazy"></img>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Teams;