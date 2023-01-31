import { MdOutlineBiotech } from "react-icons/md";

function Pipeline(){
    return(
        <div>
            <div className='landingpage'>
              <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Red+Tube.PNG"className='video-bg' alt="Blue DNA"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>Pipeline of Avaca Pharma</h1>
                        <p className='fg-text-p'>Our extensive pipeline of drug programmes was entirely generated in-house using the Synergix AI<sup>TM</sup>, which is capable of working across therapeutic areas.</p>
                    </div>
                </div>
            </div>
            
            <div>
                <MdOutlineBiotech className="PageIcon"></MdOutlineBiotech>
            </div>
            
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">PIPELINE</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PIPELINE</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PIPELINE</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PIPELINE</span>
                    </span>
                </h1>
            </div>
        </div>
    );
}
export default Pipeline;