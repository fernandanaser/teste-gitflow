import { Link } from "react-router-dom";

const Itensnav = ({ name, url }) => {
    return (
        <li>
            <Link to={url}> {name}</Link>
        </li>
    )
}

export default Itensnav;