import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/themeContext'

function Navbar({themes}) {
    const {state, dispatch}= useContext(ThemeContext);
    // console.log(state.darktheme)
    // console.log(themes)
    // console.log(dispatch({type:"DARK"}))
    

    return (
            <header id="header" className="fixed-top d-flex align-items-center" style={state.darktheme? themes.dark:themes.light}  >
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><Link to="/" style={state.darktheme? themes.dark : themes.light}>Presento<span>.</span></Link></h1>
                    {/* <a href="index.html" className="logo me-auto"><img src="../../assets/img/logo.png" alt="" /></a> */}

                    <nav id="navbar" className="navbar  order-last order-lg-0"  >
                        <ul>
                            <li><a href="#hero" className="nav-link  active" >Home</a></li>
                            <li><a className="nav-link"style={state.darktheme? themes.dark : themes.light} href="#about">About</a></li>
                            <li><a className="nav-link "style={state.darktheme? themes.dark : themes.light} href="#services">Services</a></li>
                            <li><a className="nav-link  "style={state.darktheme? themes.dark : themes.light} href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link "style={state.darktheme? themes.dark : themes.light} href="#team">Team</a></li>
                            <li><Link to="/blog"style={state.darktheme? themes.dark : themes.light}>Blog</Link></li>
                            <li><a className="nav-link "style={state.darktheme? themes.dark : themes.light} href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"style={state.darktheme? themes.dark : themes.light}></i>
                    </nav>

                    <button className='btn btn-dark toggle mx-4'style={state.darktheme? themes.light : themes.dark} onClick={()=>dispatch({type:"TOGGLE"})}>
                        {
                             state.darktheme ? (

                                 <i className="bi bi-brightness-high"></i>
                             ):(
                                 <i className='bi bi-circle-half'></i>

                             )
                        }
                    </button>
                </div>
            </header>
    )
}

export default Navbar
