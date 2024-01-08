import React from "react";
import { BsYoutube, BsFacebook} from "react-icons/bs";
const navbar = () => {
  return (
    <>
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>U</span>
                    <span>L</span>ike
                </h2>
            </div>
            <div className="menu-lik">
                <ul>
                    <li>
                        <a href="Home">Home</a>  
                    </li>
                    <li>
                       <a href="About">About</a>
                    </li>
                    <li>
                       <a href="Menu">Menu</a>
                    </li>
                    <li>
                       <a href="Contect">Contect</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="social-media">
                <li>
                    <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&ab_channel=ThapaTechnical" target="_ulike"><BsFacebook></BsFacebook></a>
                   
                </li>
                <li>
                    
                    <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM&ab_channel=ThapaTechnical" target="_ulike"><BsYoutube></BsYoutube></a>
                </li>
                  
                </ul>
            </div>
        </nav>
    </>
  );
};

export default navbar;
