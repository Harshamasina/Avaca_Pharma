import { RiQuestionAnswerLine } from "react-icons/ri";
import { Helmet } from 'react-helmet';

function ContactUs(){
    return(
        <>
            <Helmet>
                <title>Contact | AvacaPharma</title>
            </Helmet>
            <div className='landingpage'>
            <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Blue+Globe.mp4" 
                autoPlay 
                muted 
                loop 
                className='video-bg' 
                type="video/mp4"
                poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+Contact.png"
            />
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
            <div className="Contact">
                <div className="ContactContainer">
                    <form method="POST">
                        <div className="ContactContent">
                            <div className="input-box">
                                <label for="name">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Your Name"
                                        autoComplete="off"
                                        required>
                                    </input>
                                </label>
                            </div>
                            
                            <div className="input-box">
                                <label for="Email">
                                    <input 
                                        type="email" 
                                        name="email"  
                                        placeholder="Email Address" 
                                        required>
                                    </input>
                                </label>
                            </div>
                            
                            <div className="input-box">
                                <label for="Phone">
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="Contact Phone" 
                                        required>
                                    </input>
                                </label>
                            </div>

                            <div className="input-box">
                                <label for="subject">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder="Subject"
                                        autoComplete="off"
                                        required>
                                    </input>
                                </label>
                            </div>

                            <div className="input-box">
                                <label for="message">
                                    <textarea 
                                        type="text" 
                                        name="message" 
                                        placeholder="Your Message"
                                        autoComplete="off"
                                        required>
                                    </textarea>
                                </label>
                            </div>
                        </div>
                        
                        <div>
                            <input className="CUForm"
                                type="submit" 
                                name="register"
                                value="Send Message">
                            </input>
                        </div>
                    </form>
                </div>
                <div className="ContactAddress">
                    <div>
                        <h4>R&D Center : </h4>
                        <ul>
                            <li>Plot No.153, Phase III,</li>
                            <li>Industrial Park,</li>
                            <li>Pashmaylaram,</li>
                            <li>Medak District - 502307</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact Details : </h4>
                        <ul>
                            <li><span>Phone : </span>(+91)-40-23545946</li>
                            <li><span>FAX : </span>(+91)-40-23545949</li>
                            <li>INFO@CELLIXBIOPHARMA.COM</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li><span>Phone : </span>(+91) 8455-295832</li>
                            <li>OPERATIONS@AVACAPHARMA.COM</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;