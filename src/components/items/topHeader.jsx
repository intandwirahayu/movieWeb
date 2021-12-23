import { useState } from "react";
import { Link } from "react-router-dom";
import { iconMenu } from "../../assets/images";
import '../css/topHeader.scss';

const TopHeader = () => {
    const [show, setShow] = useState(false);

    const showMenu = () => {
        setShow(!show);
        console.log(show);
    }

    return(
        <div id="top-header">
            <h2>MovieWeb.</h2>

            <div id="menu" onClick={() => showMenu()}>
                <img src={iconMenu}/>
            </div>

            <nav id="drop_menu" className={show? "show" : ""}>
                <ul>
                    <li><Link to="/" className="linkHeader" onClick={() => showMenu()}>Home</Link></li>
                    <li><Link to="/upcoming" className="linkHeader" onClick={() => showMenu()}>Upcoming</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default TopHeader;