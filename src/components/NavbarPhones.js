import { Link } from "react-router-dom";
import {slide as Menu} from "react-burger-menu";
import logoHome from "../images/FZIN.svg";
const NavbarPhones = ({color}) => {
  


  var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '15px',
        left: '36px',
        top: '20px',
        zIndex: "90000"
      },
      bmBurgerBars: {
        background: "#00235B",
        // here i can change the display to whatever i want 
        display: "unset"
        
      },
      bmBurgerBarsHover: {
        background: '#a90000'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenuWrap: {
        position: 'fixed',
        height: '100%'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        backgroundColor: "#F3F3F3",
        height: "100vh"
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
        display:"flex",
        flexDirection: "column"
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }


    var stylesHome={
      bmBurgerButton: {
          position: 'fixed',
          width: '30px',
          height: '15px',
          left: '36px',
          top: '20px',
          zIndex: "999999"
        },
        bmBurgerBars: {
          background: color,
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          backgroundColor: "#F3F3F3",
          height: "100vh"
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em',
          display:"flex",
          flexDirection: "column"
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
    }


    const pointerStyle={
      pointerEvents:"none",
      zIndex:"20000000"
    }
 

  return ( 
    <>
      <div  className="allages2102  uniqueDisplay">
            <object id="objectmobile" style={pointerStyle} type="image/svg+xml" data={logoHome}>LOGO HOME</object>
            <div id="logo_text_mobile" >
                <p>design</p>
                <p>solutions</p>
            </div>
      </div>
      <Menu className="dead"  styles={ color?stylesHome:styles} width={"100%"} pageWrapId={"page-wrap"}>
          <Link className="menu-item" id="home" to="/">Home</Link>
          <Link className="menu-item" id="about" to="/about">About</Link>
          <Link className="menu-item" id="projects" to="/projects">Projects</Link>
          <Link className="menu-item" id="sustainability" to ="/sustainability">Sustainability</Link>
          <Link className="menu-item" id="contact" to="/contact">Contact</Link>
          <Link className="menu-item" id="plus" to="/plus">Plus</Link>
      </Menu>
      </>
    );
}
 
export default NavbarPhones;