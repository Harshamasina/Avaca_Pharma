import { NavLink} from "react-router-dom";

function Logo(){
    return(
        <div className="logo">
            <NavLink to="Home">
            <img className="logo" src="https://avaca-pharma-assets.s3.ap-south-1.amazonaws.com/Avaca+Pharma+Main+Logo.png" alt="Logo"></img></NavLink>
        </div>
    )
}

export default Logo;