import React from "react";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Certificate = () => {
    let data = [
        {
            id: 1,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Land+Certificate.jpg' 
        },
        {
            id: 2,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/CRDA+Plan.png' 
        },
        {
            id: 1,
            imgSrc: 'https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Factory+CFO.png' 
        },
    ]
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return(
        <div>
            <h3 className="Certh3">Certificates</h3>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} alt="LabPics"></img>
                <IoCloseOutline className="CloseLabIcon" onClick={() => setModel(false)}></IoCloseOutline>
            </div> 
            <div className="CertGallery">
                {data.map((item, index) => {
                    return(
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={index} style={{width: '100%'}} loading="lazy"></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Certificate;