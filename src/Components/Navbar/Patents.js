import { FaRegCopyright } from "react-icons/fa";
import Table from 'react-bootstrap/Table';
import { Helmet } from 'react-helmet';

function Patents(){
    const Data = [
        {
            wno: "WO2023052974",
            therapeutic_area: "TREATMENT OF OPHTHALMIC DISEASES AND DISORDERS",
            pub_date: "06.04.2023",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2023052974"
        },
        {
            wno: "WO2023052977	",
            therapeutic_area: "COMPOSITIONS, METHODS AND USES THEREOF",
            pub_date: "06.04.2023",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2023052977"
        },
        {
            wno: "WO2023031755",
            therapeutic_area: "FORMULATIONS, COMPOSITIONS AND METHODS FOR THE DELIVERY OF NEURODEGENERATIVE DRUGS THEREOF",
            pub_date: "09.03.2023",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2023031755"
        },
        {
            wno: "WO2023012610",
            therapeutic_area: "FORMULATIONS, COMPOSITIONS AND METHODS FOR THE TREATMENT OF STROKE",
            pub_date: "09.02.2023",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2023012610"
        },
        {
            wno: "WO2023002338",
            therapeutic_area: "COMPOSITIONS, METHODS OF MAKING AND USING SAME FOR THE DELIVERY OF ULCEROGENIC DRUGS THEREOF",
            pub_date: "26.01.2023",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2023012610"
        },
        {
            wno: "US20230020927",
            therapeutic_area: "TREATMENT OF ALLERGIC CONDITIONS/DISEASES OF SKIN",
            pub_date: "19.01.2023",
            hyperlink: "https://www.cellixbio.com/patentInfo/US20230020927"
        },
        {
            wno: "WO2022190030",
            therapeutic_area: "TREATMENT OF SKIN DISEASES",
            pub_date: "15.09.2022",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022190030"
        },
        {
            wno: "WO2022175829",
            therapeutic_area: "TREATMENT OF ALLERGIC DISEASES OF SKIN",
            pub_date: "25.08.2022",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022175829"
        },
        {
            wno: "WO2022157564",
            therapeutic_area: "TREATMENT OF ORAL MUCOSITIS, GASTRITIS, GASTRIC ULCERS",
            pub_date: "28.07.2022",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022157564"
        },
        {
            wno: "WO2022157563",
            therapeutic_area: "TREATMENT OF MUCOSITIS, ORAL MUCOSITIS",
            pub_date: "28.07.2022",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022157563"
        },
        {
            wno: "WO2022157587",
            therapeutic_area: "TREATMENT OF ORAL MUCOSITIS AND ULCERS",
            pub_date: "28.07.2022",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022157587"
        },
        {
            wno: "WO2022130040",
            therapeutic_area: "TREATMENT OF URTICARIA, ATOPIC DERMATITIS, PRURITUS",
            pub_date: "23.06.2022",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022130040"
        },
        {
            wno: "WO2022123511",
            therapeutic_area: "TREATMENT OF ALLERGIC DISEASES",
            pub_date: "	16.06.2022 ",
            hyperlink: "https://www.cellixbio.com/patentInfo/WO2022123511"
        }
    ];
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
                            {
                                Data && Data.map((patent) => (
                                    <tr>
                                        <td></td>
                                        <td>
                                            <a className="wipoNo" href={patent.hyperlink} target="_blank" rel="noreferrer">
                                                {patent.wno}
                                            </a>
                                        </td>
                                        <td>
                                            <a className="wipoNo" href={patent.hyperlink} target="_blank" rel="noreferrer">
                                                {patent.therapeutic_area}
                                            </a>
                                        </td>
                                        <td>{patent.pub_date}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Patents;