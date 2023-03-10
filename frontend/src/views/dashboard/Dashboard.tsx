import * as React from "react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

// Style
import "./Dashboard.css";


const Dashboard = () => {
    const [fullWidth, setFullWidth] = useState<boolean>(false);
    const location = useLocation();

    return (
        <>
            {/* Top Navigation */}
            <Navigation fullWidth={fullWidth} setFullWidth={setFullWidth}  />

            <div className="dashboard_section">
                {/* Side Section */}
                <div className={`side ${fullWidth ? 'hide' : ''}`}>
                    <Link to="/dashboard/create_farm" className="btn_bg mb2">
                       <span className="mr">Create new farm</span> 
                       <span className="btn_icon">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5769 0.622525C15.6747 -0.207509 17.4563 -0.207509 18.5542 0.622525L19.0269 0.980317C20.1248 1.81044 20.1248 3.15629 19.0269 3.98582L11.3224 9.81026C10.9825 10.0641 10.5644 10.2501 10.1034 10.3505L6.19644 11.1948C5.86826 11.2656 5.51663 11.1948 5.2744 10.9881C5.03607 10.8317 4.94231 10.566 5.03607 10.318L6.15347 7.36594C6.2863 7.0176 6.53244 6.70173 6.86844 6.4449L14.5769 0.622525ZM17.1945 1.62446C16.8624 1.34785 16.2686 1.34785 15.9013 1.62446L14.7644 2.48322L16.5655 3.84412L17.7024 2.9585C18.0697 2.70757 18.0697 2.25886 17.7024 1.98225L17.1945 1.62446V1.62446ZM7.95848 7.75562L7.30211 9.48258L9.58769 8.98663C9.74396 8.95416 9.88071 8.89216 9.99401 8.80655L15.2411 4.84487L13.44 3.48397L8.19681 7.4486C8.08351 7.53421 8.00146 7.63753 7.95848 7.75562V7.75562ZM7.81392 1.77472C8.33355 1.77472 8.7516 2.09207 8.7516 2.48322C8.7516 2.87584 8.33355 3.19171 7.81392 3.19171H3.43813C2.57508 3.19171 1.87534 3.72013 1.87534 4.37254V12.4022C1.87534 13.0546 2.57508 13.583 3.43813 13.583H14.0651C14.9285 13.583 15.6278 13.0546 15.6278 12.4022V9.09586C15.6278 8.70323 16.0459 8.38736 16.5655 8.38736C17.0851 8.38736 17.5032 8.70323 17.5032 9.09586V12.4022C17.5032 13.8369 15.9638 15 14.0651 15H3.43813C1.53934 15 0 13.8369 0 12.4022V4.37254C0 2.93784 1.53934 1.77472 3.43813 1.77472H7.81392Z" fill="white"/>
                            </svg>
                       </span>
                    </Link>

                    <div className="flex_start_center mb2">
                        <span className="dash_icon mr">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5769 0.622525C15.6747 -0.207509 17.4563 -0.207509 18.5542 0.622525L19.0269 0.980317C20.1248 1.81044 20.1248 3.15629 19.0269 3.98582L11.3224 9.81026C10.9825 10.0641 10.5644 10.2501 10.1034 10.3505L6.19644 11.1948C5.86826 11.2656 5.51663 11.1948 5.2744 10.9881C5.03607 10.8317 4.94231 10.566 5.03607 10.318L6.15347 7.36594C6.2863 7.0176 6.53244 6.70173 6.86844 6.4449L14.5769 0.622525ZM17.1945 1.62446C16.8624 1.34785 16.2686 1.34785 15.9013 1.62446L14.7644 2.48322L16.5655 3.84412L17.7024 2.9585C18.0697 2.70757 18.0697 2.25886 17.7024 1.98225L17.1945 1.62446V1.62446ZM7.95848 7.75562L7.30211 9.48258L9.58769 8.98663C9.74396 8.95416 9.88071 8.89216 9.99401 8.80655L15.2411 4.84487L13.44 3.48397L8.19681 7.4486C8.08351 7.53421 8.00146 7.63753 7.95848 7.75562V7.75562ZM7.81392 1.77472C8.33355 1.77472 8.7516 2.09207 8.7516 2.48322C8.7516 2.87584 8.33355 3.19171 7.81392 3.19171H3.43813C2.57508 3.19171 1.87534 3.72013 1.87534 4.37254V12.4022C1.87534 13.0546 2.57508 13.583 3.43813 13.583H14.0651C14.9285 13.583 15.6278 13.0546 15.6278 12.4022V9.09586C15.6278 8.70323 16.0459 8.38736 16.5655 8.38736C17.0851 8.38736 17.5032 8.70323 17.5032 9.09586V12.4022C17.5032 13.8369 15.9638 15 14.0651 15H3.43813C1.53934 15 0 13.8369 0 12.4022V4.37254C0 2.93784 1.53934 1.77472 3.43813 1.77472H7.81392Z" fill="#000"/>
                            </svg>
                        </span>

                        <Link to="/dashboard" className={`${location.pathname === "/dashboard" ? 'active' : ''}`}>Dashboard</Link>
                    </div>

                    <div className="flex_start_center mb2">
                        <span className="dash_icon mr">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5769 0.622525C15.6747 -0.207509 17.4563 -0.207509 18.5542 0.622525L19.0269 0.980317C20.1248 1.81044 20.1248 3.15629 19.0269 3.98582L11.3224 9.81026C10.9825 10.0641 10.5644 10.2501 10.1034 10.3505L6.19644 11.1948C5.86826 11.2656 5.51663 11.1948 5.2744 10.9881C5.03607 10.8317 4.94231 10.566 5.03607 10.318L6.15347 7.36594C6.2863 7.0176 6.53244 6.70173 6.86844 6.4449L14.5769 0.622525ZM17.1945 1.62446C16.8624 1.34785 16.2686 1.34785 15.9013 1.62446L14.7644 2.48322L16.5655 3.84412L17.7024 2.9585C18.0697 2.70757 18.0697 2.25886 17.7024 1.98225L17.1945 1.62446V1.62446ZM7.95848 7.75562L7.30211 9.48258L9.58769 8.98663C9.74396 8.95416 9.88071 8.89216 9.99401 8.80655L15.2411 4.84487L13.44 3.48397L8.19681 7.4486C8.08351 7.53421 8.00146 7.63753 7.95848 7.75562V7.75562ZM7.81392 1.77472C8.33355 1.77472 8.7516 2.09207 8.7516 2.48322C8.7516 2.87584 8.33355 3.19171 7.81392 3.19171H3.43813C2.57508 3.19171 1.87534 3.72013 1.87534 4.37254V12.4022C1.87534 13.0546 2.57508 13.583 3.43813 13.583H14.0651C14.9285 13.583 15.6278 13.0546 15.6278 12.4022V9.09586C15.6278 8.70323 16.0459 8.38736 16.5655 8.38736C17.0851 8.38736 17.5032 8.70323 17.5032 9.09586V12.4022C17.5032 13.8369 15.9638 15 14.0651 15H3.43813C1.53934 15 0 13.8369 0 12.4022V4.37254C0 2.93784 1.53934 1.77472 3.43813 1.77472H7.81392Z" fill="#000"/>
                            </svg>
                        </span>

                        <Link to="/dashboard/my_farms" className={`${location.pathname === "/dashboard/my_farms" ? 'active' : ''}`}>My farms</Link>
                    </div>

                    <div className="flex_start_center mb2">
                        <span className="dash_icon mr">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5769 0.622525C15.6747 -0.207509 17.4563 -0.207509 18.5542 0.622525L19.0269 0.980317C20.1248 1.81044 20.1248 3.15629 19.0269 3.98582L11.3224 9.81026C10.9825 10.0641 10.5644 10.2501 10.1034 10.3505L6.19644 11.1948C5.86826 11.2656 5.51663 11.1948 5.2744 10.9881C5.03607 10.8317 4.94231 10.566 5.03607 10.318L6.15347 7.36594C6.2863 7.0176 6.53244 6.70173 6.86844 6.4449L14.5769 0.622525ZM17.1945 1.62446C16.8624 1.34785 16.2686 1.34785 15.9013 1.62446L14.7644 2.48322L16.5655 3.84412L17.7024 2.9585C18.0697 2.70757 18.0697 2.25886 17.7024 1.98225L17.1945 1.62446V1.62446ZM7.95848 7.75562L7.30211 9.48258L9.58769 8.98663C9.74396 8.95416 9.88071 8.89216 9.99401 8.80655L15.2411 4.84487L13.44 3.48397L8.19681 7.4486C8.08351 7.53421 8.00146 7.63753 7.95848 7.75562V7.75562ZM7.81392 1.77472C8.33355 1.77472 8.7516 2.09207 8.7516 2.48322C8.7516 2.87584 8.33355 3.19171 7.81392 3.19171H3.43813C2.57508 3.19171 1.87534 3.72013 1.87534 4.37254V12.4022C1.87534 13.0546 2.57508 13.583 3.43813 13.583H14.0651C14.9285 13.583 15.6278 13.0546 15.6278 12.4022V9.09586C15.6278 8.70323 16.0459 8.38736 16.5655 8.38736C17.0851 8.38736 17.5032 8.70323 17.5032 9.09586V12.4022C17.5032 13.8369 15.9638 15 14.0651 15H3.43813C1.53934 15 0 13.8369 0 12.4022V4.37254C0 2.93784 1.53934 1.77472 3.43813 1.77472H7.81392Z" fill="#000"/>
                            </svg>
                        </span>

                        <Link to="/dashboard/faqs" className={`${location.pathname === "/dashboard/faqs" ? 'active' : ''}`}>FAQs</Link>
                    </div>

                    <div className="flex_start_center mb2">
                        <span className="dash_icon mr">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5769 0.622525C15.6747 -0.207509 17.4563 -0.207509 18.5542 0.622525L19.0269 0.980317C20.1248 1.81044 20.1248 3.15629 19.0269 3.98582L11.3224 9.81026C10.9825 10.0641 10.5644 10.2501 10.1034 10.3505L6.19644 11.1948C5.86826 11.2656 5.51663 11.1948 5.2744 10.9881C5.03607 10.8317 4.94231 10.566 5.03607 10.318L6.15347 7.36594C6.2863 7.0176 6.53244 6.70173 6.86844 6.4449L14.5769 0.622525ZM17.1945 1.62446C16.8624 1.34785 16.2686 1.34785 15.9013 1.62446L14.7644 2.48322L16.5655 3.84412L17.7024 2.9585C18.0697 2.70757 18.0697 2.25886 17.7024 1.98225L17.1945 1.62446V1.62446ZM7.95848 7.75562L7.30211 9.48258L9.58769 8.98663C9.74396 8.95416 9.88071 8.89216 9.99401 8.80655L15.2411 4.84487L13.44 3.48397L8.19681 7.4486C8.08351 7.53421 8.00146 7.63753 7.95848 7.75562V7.75562ZM7.81392 1.77472C8.33355 1.77472 8.7516 2.09207 8.7516 2.48322C8.7516 2.87584 8.33355 3.19171 7.81392 3.19171H3.43813C2.57508 3.19171 1.87534 3.72013 1.87534 4.37254V12.4022C1.87534 13.0546 2.57508 13.583 3.43813 13.583H14.0651C14.9285 13.583 15.6278 13.0546 15.6278 12.4022V9.09586C15.6278 8.70323 16.0459 8.38736 16.5655 8.38736C17.0851 8.38736 17.5032 8.70323 17.5032 9.09586V12.4022C17.5032 13.8369 15.9638 15 14.0651 15H3.43813C1.53934 15 0 13.8369 0 12.4022V4.37254C0 2.93784 1.53934 1.77472 3.43813 1.77472H7.81392Z" fill="#000"/>
                            </svg>
                        </span>

                        <Link to="/dashboard/forum" className={`${location.pathname === "/dashboard/forum" ? 'active' : ''}`}>Forum</Link>
                    </div>

                    <div className="flex_start_center mb2">
                        <span className="dash_icon mr">
                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5769 0.622525C15.6747 -0.207509 17.4563 -0.207509 18.5542 0.622525L19.0269 0.980317C20.1248 1.81044 20.1248 3.15629 19.0269 3.98582L11.3224 9.81026C10.9825 10.0641 10.5644 10.2501 10.1034 10.3505L6.19644 11.1948C5.86826 11.2656 5.51663 11.1948 5.2744 10.9881C5.03607 10.8317 4.94231 10.566 5.03607 10.318L6.15347 7.36594C6.2863 7.0176 6.53244 6.70173 6.86844 6.4449L14.5769 0.622525ZM17.1945 1.62446C16.8624 1.34785 16.2686 1.34785 15.9013 1.62446L14.7644 2.48322L16.5655 3.84412L17.7024 2.9585C18.0697 2.70757 18.0697 2.25886 17.7024 1.98225L17.1945 1.62446V1.62446ZM7.95848 7.75562L7.30211 9.48258L9.58769 8.98663C9.74396 8.95416 9.88071 8.89216 9.99401 8.80655L15.2411 4.84487L13.44 3.48397L8.19681 7.4486C8.08351 7.53421 8.00146 7.63753 7.95848 7.75562V7.75562ZM7.81392 1.77472C8.33355 1.77472 8.7516 2.09207 8.7516 2.48322C8.7516 2.87584 8.33355 3.19171 7.81392 3.19171H3.43813C2.57508 3.19171 1.87534 3.72013 1.87534 4.37254V12.4022C1.87534 13.0546 2.57508 13.583 3.43813 13.583H14.0651C14.9285 13.583 15.6278 13.0546 15.6278 12.4022V9.09586C15.6278 8.70323 16.0459 8.38736 16.5655 8.38736C17.0851 8.38736 17.5032 8.70323 17.5032 9.09586V12.4022C17.5032 13.8369 15.9638 15 14.0651 15H3.43813C1.53934 15 0 13.8369 0 12.4022V4.37254C0 2.93784 1.53934 1.77472 3.43813 1.77472H7.81392Z" fill="#000"/>
                            </svg>
                        </span>

                        <Link to="/dashboard/reminder" className={`${location.pathname === "/dashboard/reminder" ? 'active' : ''}`}>Reminder</Link>
                    </div>
                </div>

                {/* Main Section */}
                <div className={`main ${fullWidth ? 'fullWidth' : ''}`}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard;