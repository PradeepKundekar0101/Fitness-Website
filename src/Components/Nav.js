import React from 'react'
import { useState } from 'react';
const Nav = () => {
    const [changeBg, setChangeBg] = useState(false);
    const toggleBg=()=>{
        if(window.scrollY>100)
        {
            setChangeBg(true);
            const topnav=document.getElementById("topnav");
            topnav.style.height="0";
        }
        else
        {
            setChangeBg(false);
            const topnav=document.getElementById("topnav");
            topnav.style.height="5rem";
        }
      }
      window.addEventListener("scroll",()=>{
        toggleBg();
      })
  return (
    <div  className='nav'>
        <div id="topnav" className='topnav'>
            <div className='left'>
            <ul>
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
                <li ><i className="fa-brands fa-instagram"></i></li>
            </ul>
            </div>
            <div className='right'>
                <ul>
                    <li><i className="fa-solid fa-phone"></i>  (222) 400-630</li>
                    <li><i className="fa-solid fa-envelope"></i>  pradeepkundekar1010@gmail.com</li>
                    <li className='lastli'><i className="fa-solid fa-clock"></i>  Mon - Fri: 08:00 - 22:00</li>
                </ul>
            </div>
        </div>
        <nav 
            style={{width:"100vw"}} 
            className={changeBg?"bottomnav navbar navbar-expand-lg navbar-light lg-dark":"bottomnav navbar navbar-expand-lg navbar-dark lg-da "}
            >
            <a style={{fontSize:"2rem",color:"#000"}} className="navbar-brand" href="#"><b>FIT</b></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

             <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Schedule</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Training</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">ContactUs</a>
            </li>
            </ul>
           
        </div>
        </nav>
        {/* <div className={changeBg? "bottomnav lightnav": "bottomnav darknav" }>
            <div className='left'>
                <h1 className='logo'>Fitness</h1>
            </div>
            <div className='right'>
                <ul>
                    <li>Demos</li>
                    <li>Pages</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Element</li>
                </ul>
                <button className='btn-primary'>GET STARTED</button>
            </div>
        </div> */}
    </div>
  )
}

export default Nav