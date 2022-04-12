import logoSVGFooter from "../images/FZIN_footer.svg";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="cf">
            <div className="part1">
                <object type="image/svg+xml" data={logoSVGFooter} className="logo">In case you cannot see it</object>
                <span id="footermobile"></span>
                <div>
                    <span>We are a community with different skills, <br/> but a shared vision.</span>
                    <p>A multidiciplinary group of professionals with diverse backrounds and areas of expertise aiming to find innovative solutions to complex challenges. </p>
                </div>
                
            </div>
            <span></span>
            <div className="part2">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/sustainability">sustainability</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/plus">+</Link></li>
                </ul>

                <div className="follow">
                    <h3>FOLLOW US</h3>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/fzin.architects?utm_medium=copy_link">
                        <FontAwesomeIcon className="insta" icon={faInstagram} size="2x"/>
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/fzin-architects/">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                </div>

                <div>
                    &#169; 2021 — 2022
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;