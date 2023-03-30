import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Mobile from "./mobile/Mobile";
// Image
import profile from "../../assets/profile.jpg";
// Style
import "./Navigation.css";

interface NavProps {
    fullWidth: boolean;
    setFullWidth: Function;
}

const Navigation = ({ fullWidth, setFullWidth}: NavProps ) => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <>
            {/* Mobile Menu */}
            <Mobile 
                showMobileMenu={showMobileMenu} 
                setShowMobileMenu={setShowMobileMenu}
            />

            <nav className="nav">
                <div className="nav_wrapper">
                    <div className="nav_left">
                        {
                            fullWidth ? (
                                <div className="dash_side_handburger" onClick={() => setFullWidth(false)}>
                                    <svg width="97" height="70" viewBox="0 0 97 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="6.11959e-07" y1="7" x2="97" y2="7.00001" stroke="#fff" strokeWidth="14"/>
                                        <line x1="6.11959e-07" y1="35" x2="97" y2="35" stroke="#fff" strokeWidth="14"/>
                                        <line x1="6.11959e-07" y1="63" x2="97" y2="63" stroke="#fff" strokeWidth="14"/>
                                    </svg>
                                </div>
                            ) : null
                        }

                        <Link to="/" className={`app_name ${fullWidth ? 'hide' : ''}`}>SmatAgrosys</Link>
                        <button className={`close_full_width ${fullWidth ? 'hide' : ''}`} 
                            onClick={() => setFullWidth(true)}
                        >X</button>
                    </div>

                    <div className="nav_right">
                        <div className="icon mr2">
                            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.4929 4.71411C14.1786 4.71411 10.5661 12.2427 10.5661 17.2195C10.5661 20.9391 11.1054 19.8445 9.04649 24.382C6.5322 30.848 16.6429 33.4909 22.4929 33.4909C28.3411 33.4909 38.4518 30.848 35.9393 24.382C33.8804 19.8445 34.4197 20.9391 34.4197 17.2195C34.4197 12.2427 30.8054 4.71411 22.4929 4.71411Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M26.8238 38.4603C24.397 41.171 20.6113 41.2032 18.1613 38.4603" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="18" cy="6" r="5" fill="#FF83A8" stroke="#fff" strokeWidth="2"/>
                            </svg>

                            <span className="notif_text">23</span>
                        </div>

                        <Link to="#" className="icon overflow_hidden"><img src={profile} alt="Profile_Image" /></Link>

                        <div className="dash_handburger ml2" onClick={() => setShowMobileMenu(true)}>
                            <svg width="97" height="70" viewBox="0 0 97 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="6.11959e-07" y1="7" x2="97" y2="7.00001" stroke="#fff" strokeWidth="14"/>
                                <line x1="6.11959e-07" y1="35" x2="97" y2="35" stroke="#fff" strokeWidth="14"/>
                                <line x1="6.11959e-07" y1="63" x2="97" y2="63" stroke="#fff" strokeWidth="14"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;