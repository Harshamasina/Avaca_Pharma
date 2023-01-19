import { RiQuestionAnswerLine } from "react-icons/ri";

function ContactUs(){
    document.title = 'AvacaPharma - Contact';
    return(
        <>
            <div className='landingpage'>
              <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Data.jpg"className='video-bg' alt="Blue DNA"/>
                {/* <div className='bg-overlay'></div> */}
                <div className='fg-text'>
                    <div>
                        <h1 className='fg-text-h1'>CONTACT US</h1>
                        {/* <p className='fg-text-p'>LET US KNOW YOUR QUERIES</p> */}
                    </div>
                </div>
            </div>
            <div>
                <RiQuestionAnswerLine className="PageIcon"></RiQuestionAnswerLine>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">CONTACT</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">CONTACT</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">CONTACT</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">CONTACT</span>
                    </span>
                </h1>
            </div>
        </>
    )
}

export default ContactUs;