import { Link } from "react-router-dom";

function Error(){
    return(
        <div>
            <div className='landingpage'>
              <img src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Error+404-2.jpg" className='video-bg' alt="Error 404"/>
              <Link to="/home" className="ErrorLink">Click to go to Home</Link>
            </div>
        </div>
    );
}

export default Error;