import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

function GoToTopButton(){
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    };
    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(winScroll);
        if(winScroll > heightToHidden){
            setIsVisible(true);
        }else{
           setIsVisible(false); 
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    },[])
    return(
        <div>
             <div className="top-btn" onClick={goToBtn}>
                {isVisible && (<RxDoubleArrowUp></RxDoubleArrowUp>)}
            </div>
        </div>
    );
}
export default GoToTopButton;