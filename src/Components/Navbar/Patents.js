import { FaRegCopyright } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet';

function Patents(){
    return(
        <>
            <Helmet>
                <title>Patents | AvacaPharma</title>
                <meta name="description" content="Patents filed by AvacaPharma in 2022 AND 2023" />
                <meta name="keywords" content="patents, cellix bio avacapharma patents, WO2023012610, WO2023002338, WO2023031755, US20230020927, 
                    WO2022190030, WO2022175829, WO2022157564, WO2022157563, WO2022157587, WO2022130040, WO2022123511, ALLERGIC DISEASES OF SKIN, ORAL MUCOSITIS AND ULCERS, 
                    GASTRITIS, GASTRIC ULCERS, SKIN DISEASES" 
                />
            </Helmet>
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
                    <Table striped hover className="auto-index">
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
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2023031755" target="_blank" rel="noreferrer">WO2023031755</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2023031755" target="_blank" rel="noreferrer">FORMULATIONS, COMPOSITIONS AND METHODS FOR THE DELIVERY OF NEURODEGENERATIVE DRUGS THEREOF</a></td>
                                <td>09.03.2023</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2023012610" target="_blank" rel="noreferrer">WO2023012610</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2023012610" target="_blank" rel="noreferrer">FORMULATIONS, COMPOSITIONS AND METHODS FOR THE TREATMENT OF STROKE</a></td>
                                <td>09.02.2023</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2023002338" target="_blank" rel="noreferrer">WO2023002338</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2023012610" target="_blank" rel="noreferrer">COMPOSITIONS, METHODS OF MAKING AND USING SAME FOR THE DELIVERY OF ULCEROGENIC DRUGS THEREOF</a></td>
                                <td>26.01.2023</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/US20230020927" target="_blank" rel="noreferrer">US20230020927</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/US20230020927" target="_blank" rel="noreferrer">treatment of allergic conditions/diseases of skin</a></td>
                                <td>19.01.2023</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022190030" target="_blank" rel="noreferrer">WO2022190030</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/US20230020927" target="_blank" rel="noreferrer">TREATMENT OF SKIN DISEASES</a></td>
                                <td>15.09.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022175829" target="_blank" rel="noreferrer">WO2022175829</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022175829" target="_blank" rel="noreferrer">treatment of allergic diseases of skin</a></td>
                                <td>25.08.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022157564" target="_blank" rel="noreferrer">WO2022157564</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022157564" target="_blank" rel="noreferrer">treatment of oral mucositis, gastritis, gastric ulcers</a></td>
                                <td>28.07.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022157563" target="_blank" rel="noreferrer">WO2022157563</a></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022157563" target="_blank" rel="noreferrer">treatment of mucositis, oral mucositis</a></td>
                                <td>28.07.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022157587" target="_blank" rel="noreferrer">WO2022157587</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022157587" target="_blank" rel="noreferrer">treatment of oral mucositis and ulcers</a></td>
                                <td>28.07.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022130040" target="_blank" rel="noreferrer">WO2022130040</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022130040" target="_blank" rel="noreferrer">treatment of urticaria, atopic dermatitis, pruritus</a></td>
                                <td>23.06.2022</td>
                            </tr>

                            <tr>
                                <td></td>
                                <td className="wipoNo"><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022123511" target="_blank" rel="noreferrer">WO2022123511</a></td>
                                <td><a className="wipoNo" href="https://www.cellixbio.com/patentInfo/WO2022123511" target="_blank" rel="noreferrer">treatment of allergic diseases</a></td>
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