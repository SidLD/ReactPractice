import React, { useRef, useState } from "react"; 
import {NavLink, Outlet } from "react-router-dom";
import { FaBars} from "react-icons/fa"
import {PageContext} from "../lib/PageContext";

function RootLayout() {
    const links = [
        {
            link: "about",
            title: "About"
        },
        {
            link: "blog",
            title: "Blog"
        },
        {
            link: "progress",
            title: "Progress Bar"
        },
        {
            link: "form",
            title: "Custome Form"
        },
        {
            link: "recursive",
            title: "Recursion"
        }
    ]
    const navRef = useRef();
    let [showNav, setShowNav]= useState(true)
    const toogleNav = () => {
        if(!showNav){
            navRef.current.classList.remove("hide")
            setShowNav(true)
        }else{
            navRef.current.className = "hide"
            setShowNav(false)
        }
    }
    return (   
        <PageContext.Consumer>
            {(context) => {
                if(context.isLogin){
                    return(
                        <div>
                        <header>
                            <h3>Logo</h3>
                            <nav ref={navRef}>
                                {links.map((link, index) => {
                                    return (
                                        <NavLink className="link" key={index} to={link.link} >{link.title}</NavLink>
                                    )
                                })}
                                {/* <button onClick={toogleNav}><FaTimes /></button> */}
                            </nav>
                            <button className="burger" onClick={toogleNav}>
                                <FaBars />
                            </button>
                        </header>
                        <main>
                                <Outlet/>
                        </main>
                        </div>
                    )
                }else{
                    <div>Not Login</div>
                }
                
            }}
        </PageContext.Consumer>
    );
  
}

export default RootLayout;