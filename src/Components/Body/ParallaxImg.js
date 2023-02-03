import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = (props) => {
    let contentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: '#ffffff',
        background: 'rgba(0, 0, 0, .4)',
        Filter: 'blur(opx) saturate(2)'
    }
    return(
        <div>
            <ParallaxBanner 
                layers={[{image: props.imgsrc, amount: 0.6}]}
                style={{height: props.height}}
            >
                <div className={contentStyle}>
                    {props.children} 
                </div>
            </ParallaxBanner>
        </div>
    );
}
export default ParallaxImg;