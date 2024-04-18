import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return(
        <>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src="./assets/images/Tundra1.svg" alt=""/>

                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">About</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact</a>
                        </li>
                        <button className="contact-btn" onClick={() => {}}>
                            Contact Me
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={()=>{}}>
                    <span
                        class={"material-symbols-outlined"}
                        style={{ fontSize: "1.3rem"}}
                    >
                        menu
                        </span>
                    </button>
                </div>
            </nav>

        </>
    );
};

export default Navbar