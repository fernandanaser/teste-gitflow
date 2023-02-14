import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Imglogo } from "./Header.styles";

const Logo = () => {
    return (
      <Imglogo>
      <Link to="/"><FaCat/></Link>
      </Imglogo>
      
    )
  }
  
  export default Logo;