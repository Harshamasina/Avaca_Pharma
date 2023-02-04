import { GiTransparentTubes } from "react-icons/gi";
import { MdOutlineAnalytics } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";

function HomeContent(){
    
    return(
        <>
            <div className="HCInro">
                <p>An innovative R&D organization</p>
                <p>Advancing drug discovery by applying the precise medicinal chemistry approaches to deliver superior drug candidates</p>
                <p>Avaca Pharma is developing novel formulation and process technologies which gives continuous manufacturing capabilities for all dosage forms</p>
            </div>

            <div className="HCTable">
                <div>
                    <GiTransparentTubes className="servicesIcon"></GiTransparentTubes>
                    <h4>FORMULATION DEVELOPMENT</h4>
                    <p>We offer value added formulation development services with an emphasis on moving your project in an efficient and cost effective way. Our formulation scientists have decades of experience supporting NDA, ANDA and 505(b)2 QbD submissions.</p>
                </div>

                <div>
                    <MdOutlineAnalytics className="servicesIcon"></MdOutlineAnalytics>
                    <h4>ANALYTICAL DEVELOPMENT</h4>
                    <p>Our experienced analytical scientists work in tandem for the success of development projects. The team offer a range of services including method development, method validation, analytical testing and stability program management.</p>
                </div>

                <div>
                    <GiMedicines className="servicesIcon"></GiMedicines>
                    <h4>COMMERCIAL MANUFACTURING</h4>
                    <p>AvacaPharma offers flexible manufacturing and packaging solutions to meet your product requirements. Our outstanding operational excellence team has been prioritizing quality, customer service and cutting edge technology.</p>
                </div>
            </div>
        </>
    );
}

export default HomeContent;