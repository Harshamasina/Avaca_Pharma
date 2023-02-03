import { FaRegCopyright } from "react-icons/fa";
import Table from 'react-bootstrap/Table';

function Patents(){
    document.title = 'AvacaPharma - Patents';
    return(
        <>
            <div className='landingpage'>
                <video src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/DNA.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    className='video-bg' 
                    type="video/mp4"
                    poster="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Poster+Patents.png"
                />
                    {/* <div className='bg-overlay'></div> */}
                    <div className='fg-text'>
                        <div>
                            <h1 className='fg-text-h1'>PATENTS FILED BY AVACA PHARMA</h1>
                            <p className='fg-text-p'>Access the Patents filed by AvacaPharma after it was acquired by Cellix Bio Pharma</p>
                        </div>
                    </div>
                </div>
            <div>
                <FaRegCopyright className="PageIcon"></FaRegCopyright>
            </div>
            <div className="PageHeading">
                <h1 class="jt --debug">
                    <span class="jt__row">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                    <span class="jt__row jt__row--sibling" aria-hidden="true">
                        <span class="jt__text">PATENT PORTFOLIO</span>
                    </span>
                </h1>
            </div>
            
            <div className="PatentsTableContainer">
                <h3>Patents filed by AvacaPharma</h3>
                <div>
                    <Table striped bordered hover className="auto-index">
                        <thead>
                            <tr id="header">
                                <th>Sno</th>
                                <th>WIPO Number</th>
                                <th>Therapeutic Area</th>
                                <th>Publication Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>WO2023002338</td>
                                <td>COMPOSITIONS, METHODS OF MAKING AND USING SAME FOR THE DELIVERY OF ULCEROGENIC DRUGS THEREOF</td>
                                <td>26.01.2023</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>US20230020927</td>
                                <td>treatment of allergic conditions/diseases of skin</td>
                                <td>19.01.2023</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022190030</td>
                                <td>TREATMENT OF SKIN DISEASES</td>
                                <td>15.09.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022175829</td>
                                <td>treatment of allergic diseases of skin</td>
                                <td>25.08.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022157564</td>
                                <td>treatment of oral mucositis, gastritis, gastric ulcers</td>
                                <td>28.07.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022157563</td>
                                <td>treatment of mucositis, oral mucositis</td>
                                <td>28.07.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022157587</td>
                                <td>treatment of oral mucositis and ulcers</td>
                                <td>28.07.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022130040</td>
                                <td>treatment of urticaria, atopic dermatitis, pruritus</td>
                                <td>23.06.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td>WO2022123511</td>
                                <td>treatment of allergic diseases</td>
                                <td>16.06.2022</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Patents;