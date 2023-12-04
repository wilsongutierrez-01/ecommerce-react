import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = ({ authenticatedUser }) => {
    const {
        role,
    } = authenticatedUser || {};

    //Datos a mostrar segun  el rol
    const renderRoleSpecificInfo = () => {
        switch (role) {
            case 'ADMIN':
                return (
                    <header className='header'>
                    <div className="container d_flex">
                        <div className="categories d_flex">
                            <span className='fa-solid fa-border-all'></span>
                            <h4>
                                Categories <i className='fa fa-chevron-down'></i>
                            </h4>
                        </div>
                        <div className="navlink">
                            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                                <li>
                                    <Link to='/'>home</Link>
                                </li>
                                <li>
                                    <Link to='/pages'>pages</Link>
                                </li>
                                <li>
                                    <Link to='/user'>user account</Link>
                                </li>
                                <li>
                                    <Link to='/vendor'>vendor account</Link>
                                </li>
                                <li>
                                    <Link to='/track'>track my order</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>contact</Link>
                                </li>
                            </ul>
                            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                                {
                                    MobileMenu ? <i className='fas fa-times close home-bth'></i> :
                                        <i className='fa-solid fa-bars open'></i>
                                }
                            </button>
                        </div>
                    </div>
                </header>
                );
            case 'CLIENTE':
                return (
                    <header className='header'>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className='fa-solid fa-border-all'></span>
                        <h4>
                            Categories <i className='fa fa-chevron-down'></i>
                        </h4>
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>home</Link>
                            </li>
                            <li>
                                <Link to='/pages'>pages</Link>
                            </li>
                            <li>
                                <Link to='/user'>user account</Link>
                            </li>
                            <li>
                                <Link to='/track'>track my order</Link>
                            </li>
                            <li>
                                <Link to='/contact'>contact</Link>
                            </li>
                        </ul>
                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className='fas fa-times close home-bth'></i> :
                                    <i className='fa-solid fa-bars open'></i>
                            }
                        </button>
                    </div>
                </div>
            </header>
                );
            default:
                return null;
        }
    };

    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            {renderRoleSpecificInfo()}
        </>
    )
}

export default Navbar
