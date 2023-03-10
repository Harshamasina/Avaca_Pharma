import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const LabPics = () => {
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
        <div>
            <h3 className="Certh3">Infrastructure</h3>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc} alt="LabPics"></img>
                <IoCloseOutline className="CloseLabIcon" onClick={() => setModel(false)}></IoCloseOutline>
            </div> 
            <div className="GalleryContaniner">
                {data.map((item, index) => {
                    return(
                        <div className="grid-images" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt={index} style={{width: '100%'}} loading="lazy"></img>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default LabPics;