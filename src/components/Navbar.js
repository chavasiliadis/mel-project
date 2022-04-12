import logoSVG from "../images/FZIN.svg";
import {Link} from "react-router-dom";
import PlusI from "../images/FZIN_PLUS.svg";
import logoHome from "../images/FZIN_Home.svg";


const Navbar = ({plus,absolute}) => {
    
    const style={
        color: "#FFB800"
    }

    const pointerStyle={
        pointerEvents:"none"
    }
    
    return ( 
        
        <div className="cf">
            <nav className={absolute && "navAbsolute"}>
                <Link style={{textDecoration:"none"}} to="/">
                    <div id={plus && "forthePLUSID"} className={plus?"forthePLUS logo":"logo"}>
                        {plus && <object style={pointerStyle} type="image/svg+xml" data={PlusI}  className="logo thisisplus">LOGO</object>}
                        {absolute && <object style={pointerStyle} type="image/svg+xml" data={logoHome} class="logo">LOGO</object>}
                        {!plus && !absolute && <object style={pointerStyle} type="image/svg+xml" data={logoSVG}  class="logo">LOGO</object>}

                        {!plus &&   
                            <div className="logo_text">
                                <p>design</p>
                                <p>solutions</p>
                            </div>
                        }
                    </div>
                </Link>

                <ul className="nav-list">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/sustainability">sustainability</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                    <li><Link to="/plus" style={style} href="#">+</Link></li>
                </ul>

                <div className="languages">
                    eng | ita
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;