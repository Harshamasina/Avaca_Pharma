import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

const ParallaxContent = () => {
    // const img1 = "https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/masks+pills.jpg";
    const img2 = "https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Analysis.jpg";
    return(
        <div>
            {/* <div style={{ textAlign: 'center', marginTop: '2%' }}>
                <Parallax bgImage={ img1 } strength={400} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer4'>
                        <div className="ParallaxDiv">
                            <h2>DISCOVER OUR TECHNOLOGY</h2>
                            <p>To create distinct medications, Structure's platform combines the most recent developments in computational chemistry, data integration, and molecular interaction visualisation. With this technology at our disposal, we want to create oral small molecule therapeutics that have biologic-like activity and selectivity while overcoming the present drawbacks of biologic and peptide medications.</p>
                            <Link to="/technology" className='Parallaxlink'>Discover More</Link>
                        </div>
                    </div>
                </Parallax>
            </div> */}
            <h2 className='Parallaxh2'>Meet Our Team</h2>
            <div style={{ textAlign: 'center', marginTop: '3%' }} >
                <Parallax bgImage={ img2 } strength={-300} bgImageAlt="parallaximg" blur={1}>
                    <div className='ParallaxContainer1'>
                        <div className="ParallaxDiv">
                            <p>The Structured team has access to world-class talent and resources in the world's top two pharmaceutical markets.</p>
                            <Link to="/gallery" className='Parallaxlink'>Know More</Link>
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
    );
}
export default ParallaxContent;