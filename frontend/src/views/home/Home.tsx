import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

// Images 
import image from "../../assets/image.png";

// Style
import "./Home.css";


const Home = () => {
    const [toggler, setToggler] = useState<boolean>(false);

    const handleSumit = (e: any) => {
        e.preventDefault();

        console.log("Form: ");
    }

    return (
        <>
            {/* Home Navigation */}
            <nav className="home_nav">
                <div className="container">
                    <div className="home_nav_wrapper">
                        <div className="home_nav_left">
                            <div className="logo mr">
                                <svg width="1294" height="1294" viewBox="0 0 1294 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1293.74 0H0V1293.74H1293.74V0Z" fill="#0C7E46"/>
                                    <path d="M841.86 552.15C841.86 552.15 643.31 557.15 609.1 831.62C609.1 831.62 678.34 654.76 765.94 594.7C765.94 594.7 668.55 686.7 615.13 837.15C611.155 848.367 609.125 860.18 609.13 872.08V881.68L597.29 825.52C588.047 781.693 588.133 736.412 597.54 692.62L603.4 665.36C604.398 660.932 604.921 656.409 604.96 651.87C604.916 638.2 609.541 624.924 618.07 614.24C654.88 568.06 758.48 435.99 788.49 375.24C788.49 375.24 684.21 434.47 647.49 459.5C610.77 484.53 586.41 566.6 594.1 619.68C594.1 619.68 614.95 522.9 680.02 478.68C680.02 478.68 611.61 552.93 597.43 627.17L593.26 650.95L570.86 595.17C558.064 563.367 550.956 529.563 549.86 495.3L548.16 441.97L545.81 485.97C543.54 528.52 550.12 571.23 566.42 610.59C580.185 643.861 584.342 680.325 578.42 715.84L574.01 742.28C574.01 742.28 553.16 592.12 442.2 537.06C442.2 537.06 509.78 557.91 559 665.53C559 665.53 555.66 488.67 267 422.77C267 422.77 515.61 546.23 554.4 751.46C556.6 763.08 558.677 774.06 560.63 784.4C575.72 864.23 514.5 938.09 433.26 938.09C431.893 938.09 430.54 937.821 429.278 937.298C428.015 936.774 426.868 936.007 425.903 935.041C424.937 934.074 424.171 932.926 423.649 931.663C423.127 930.4 422.859 929.047 422.86 927.68V547.61C411.74 536.82 400.71 526.92 390.15 518.01V927.76C390.15 939.194 394.692 950.159 402.777 958.244C410.861 966.328 421.827 970.87 433.26 970.87H621.97V938.17C622.4 907.8 623.8 860.42 628.25 850.55C655.49 790.18 739.99 617.1 841.86 552.15Z" fill="white"/>
                                    <path d="M857.24 324H433.32C427.659 324 422.053 325.115 416.823 327.281C411.592 329.448 406.84 332.623 402.837 336.626C398.833 340.63 395.658 345.382 393.492 350.613C391.325 355.843 390.21 361.449 390.21 367.11V453.54C401.597 458.807 412.5 464.383 422.92 470.27V367.11C422.92 364.351 424.015 361.704 425.965 359.752C427.916 357.8 430.561 356.703 433.32 356.7H857.24C859.998 356.705 862.642 357.804 864.592 359.755C866.541 361.707 867.637 364.352 867.64 367.11V927.76C867.637 930.518 866.541 933.163 864.592 935.115C862.642 937.066 859.998 938.165 857.24 938.17H637.92V970.87H857.24C868.672 970.867 879.634 966.324 887.717 958.24C895.799 950.155 900.34 939.192 900.34 927.76V367.11C900.34 355.678 895.799 344.715 887.717 336.63C879.634 328.546 868.672 324.003 857.24 324Z" fill="white"/>
                                </svg>
                            </div>
                        </div>

                        <div className="home_nav_right">
                            <Link className="link mr" to="#">Contact</Link>
                            <Link className="link border_gray mr" to="/auth/login">Login</Link>
                            <Link className="link btn_bg" to="#">Get Started</Link>
                            
                            <div className="handburger" onClick={() => setToggler(true)}>
                                <svg width="97" height="70" viewBox="0 0 97 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="6.11959e-07" y1="7" x2="97" y2="7.00001" stroke="#747474" strokeWidth="14"/>
                                    <line x1="6.11959e-07" y1="35" x2="97" y2="35" stroke="#747474" strokeWidth="14"/>
                                    <line x1="6.11959e-07" y1="63" x2="97" y2="63" stroke="#747474" strokeWidth="14"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div className="home_section">

                {/* Mobile Menu */}
                <div className={`mobile_section ${toggler ? 'show' : ''}`}>
                    <div className="links_wrapper">
                        <Link className="link mr mb2" to="#">Contact</Link>
                        <Link className="link mr mb2" to="/auth/login">Login</Link>
                        <Link className="link border_white" to="#">Get Started</Link>
                    </div>

                    <div className="close_btn" onClick={() => setToggler(false)}>X</div>
                </div>
                
                <div className="container">
                    {/* Banner */}
                    <div className="banner_section">
                        <div className="banner_left">
                            <h2>Manage your crops, fields and task in one place.</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Unde ipsa repudiandae maiores iure similique velit numquam 
                                explicabo libero dolore reiciendis.
                            </p>

                            <div className="flex_start_center mt2">
                                <button className="btn_bg btn_big mr2">
                                    <span className="mr">Get Started</span>
                                    <span className="arrow">
                                        <svg width="20" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5391 2.6543L21 8.99995L12.5391 15.3456" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M20.9999 9L3 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                </button>
                                <button className="btn_outline btn_big">Talk to us</button>
                            </div>
                        </div>

                        <div className="banner_right">
                            <div className="top_image"><img src={image} alt="Image1" /></div>
                            <div className="bottom_image"><img src={image} alt="Image1" /></div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="about_section">
                        <h2 className="h_center">Empowering Famers and Agro-Business</h2>
                        <p className="p_center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cum quia vel laudantium quos repellendus quo magni. 
                        </p>

                        <div className="cards">
                            <div className="card">
                                <div className="card_image"><img src={image} alt="Icon" /></div>
                                <h4 className="card_title">Crop Diagnosis</h4>
                                <p className="card_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cum quia vel laudantium quos repellendus quo magni.
                                </p>
                            </div>
                            
                            <div className="card">
                                <div className="card_image"><img src={image} alt="Icon" /></div>
                                <h4 className="card_title">Crop Diagnosis</h4>
                                <p className="card_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cum quia vel laudantium quos repellendus quo magni.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={image} alt="Icon" /></div>
                                <h4 className="card_title">Crop Diagnosis</h4>
                                <p className="card_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cum quia vel laudantium quos repellendus quo magni.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={image} alt="Icon" /></div>
                                <h4 className="card_title">Crop Diagnosis</h4>
                                <p className="card_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cum quia vel laudantium quos repellendus quo magni.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={image} alt="Icon" /></div>
                                <h4 className="card_title">Crop Diagnosis</h4>
                                <p className="card_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cum quia vel laudantium quos repellendus quo magni.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={image} alt="Icon" /></div>
                                <h4 className="card_title">Crop Diagnosis</h4>
                                <p className="card_content">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Cum quia vel laudantium quos repellendus quo magni.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Create Account Section */}
                <div className="create_account_section">
                    <div className="container">
                        <div className="create_account_wrapper">
                            <div className="account_content">
                                <div>
                                    <h2>Create your account today and get started for free!</h2>

                                    <ul>
                                        <li>Interaction design</li>
                                        <li>Finding and managing</li>
                                        <li>Information architecture</li>
                                        <li>Usability testing</li>
                                    </ul>

                                    <div className="flex_start_center mt2">
                                        <button className="btn_bg btn_big mr2">Get started</button>
                                        <button className="btn_outline btn_big">Talk to sales</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="account_image"><img src={image} alt="Image" /></div>

                        </div>
                    </div>
                </div>

                {/* Download Section */}
                <div className="download_section">
                    <div className="container">
                        <div className="card_wrapper">
                            <div className="card">
                                <h2>Download our app for iOS <br />and iPadOS</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quae nostrum assumenda saepe sequi dolores natus.
                                </p>

                                <div className="mt2">
                                    <button className="btn_bg btn_big">
                                        <span className="arrow mr">
                                            <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6977 2.08854C13.2746 0.0101326 15.4669 0 15.4669 0C15.4669 0 15.793 1.95406 14.2264 3.83643C12.5537 5.84639 10.6524 5.5175 10.6524 5.5175C10.6524 5.5175 10.2954 3.93673 11.6977 2.08854V2.08854ZM10.853 6.88631C11.6642 6.88631 13.1699 5.77117 15.1296 5.77117C18.503 5.77117 19.8301 8.17157 19.8301 8.17157C19.8301 8.17157 17.2346 9.49863 17.2346 12.7187C17.2346 16.3511 20.4679 17.603 20.4679 17.603C20.4679 17.603 18.2077 23.9648 15.1547 23.9648C13.7525 23.9648 12.6624 23.0198 11.185 23.0198C9.67935 23.0198 8.18524 24 7.21212 24C4.42431 24.0001 0.902344 17.9653 0.902344 13.1143C0.902344 8.3417 3.88346 5.83804 6.67962 5.83804C8.49738 5.83804 9.90798 6.88631 10.853 6.88631V6.88631Z"/>
                                            </svg>
                                        </span>

                                        <span>Download for iOS</span>
                                    </button>
                                </div>
                            </div>

                            <div className="card">
                                <h2>Download our app for <br />Android</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Quae nostrum assumenda saepe sequi dolores natus.
                                </p>

                                <div className="mt2">
                                    <button className="btn_bg btn_big">
                                        <span className="arrow mr">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.444947 17.7496L8.62728 9.87474L11.5124 12.6504L1.78447 17.8536C1.41446 18.0525 0.960148 18.048 0.594823 17.8446C0.594823 17.8491 0.444947 17.7496 0.444947 17.7496ZM7.80296 9.07911L0 16.5878V1.57039L7.80296 9.07911ZM12.6786 5.97798L16.4911 8.01677C16.8658 8.21568 17.1 8.59541 17.1 9.00226C17.1 9.40911 16.8658 9.78884 16.4911 9.98775L12.5756 12.0808L9.45628 9.07911C9.4516 9.07911 12.6786 5.97798 12.6786 5.97798ZM0.355957 0.327222C0.426212 0.263933 0.505834 0.205165 0.59014 0.155439C0.955464 -0.0479886 1.40978 -0.0525092 1.77979 0.146397L11.6154 5.40838L8.62728 8.28348L0.355957 0.327222Z" />
                                            </svg>
                                        </span>

                                        <span>Download for Android</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Contact */}
                <div className="contact_section">
                    <div className="container">
                        <div className="contact_wrapper">
                            <div className="content">
                                <p className="mb">CONTACT US</p>
                                <h2 className="mb2">Get in touch today</h2>
                                <p>
                                    We'd love to hear from you! Whether you have a question about our platform, 
                                    want to share feedback, or just want to say hello, our team is here to help.
                                </p>

                                <div className="flex_start_center mt2">
                                    <span className="arrow mr">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.6667 3.08337V11.4167C17.6667 11.9692 17.4472 12.4991 17.0565 12.8898C16.6658 13.2805 16.1359 13.5 15.5833 13.5H3.08333C2.5308 13.5 2.00089 13.2805 1.61019 12.8898C1.21949 12.4991 1 11.9692 1 11.4167V3.08337" stroke="#4F4F4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.6667 3.08333C17.6667 2.5308 17.4472 2.0009 17.0565 1.61019C16.6658 1.21949 16.1359 1 15.5833 1H3.08333C2.5308 1 2.00089 1.21949 1.61019 1.61019C1.21949 2.0009 1 2.5308 1 3.08333L8.22917 7.59722C8.56027 7.80417 8.94288 7.91389 9.33333 7.91389C9.72379 7.91389 10.1064 7.80417 10.4375 7.59722L17.6667 3.08333Z" stroke="#4F4F4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span>agro@agrosis.com</span>
                                </div>

                                <div className="flex_start_center mt2">
                                    <span className="arrow mr">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5849 17.0189L11.594 17.0253C12.3811 17.5264 13.3155 17.744 14.243 17.6422C15.1705 17.5403 16.0354 17.1251 16.6949 16.4651L17.2679 15.8921C17.3949 15.7653 17.4956 15.6146 17.5643 15.4488C17.633 15.2829 17.6684 15.1052 17.6684 14.9257C17.6684 14.7462 17.633 14.5685 17.5643 14.4026C17.4956 14.2368 17.3949 14.0861 17.2679 13.9593L14.8513 11.5445C14.7244 11.4175 14.5738 11.3168 14.408 11.2481C14.2421 11.1794 14.0644 11.144 13.8849 11.144C13.7054 11.144 13.5276 11.1794 13.3618 11.2481C13.196 11.3168 13.0453 11.4175 12.9184 11.5445C12.6622 11.8007 12.3148 11.9446 11.9525 11.9446C11.5902 11.9446 11.2427 11.8007 10.9865 11.5445L7.12251 7.67965C6.86636 7.42342 6.72247 7.07596 6.72247 6.71366C6.72247 6.35136 6.86636 6.00389 7.12251 5.74767C7.24948 5.62078 7.3502 5.47012 7.41892 5.3043C7.48764 5.13847 7.52301 4.96073 7.52301 4.78123C7.52301 4.60172 7.48764 4.42398 7.41892 4.25816C7.3502 4.09233 7.24948 3.94167 7.12251 3.81478L4.70686 1.40004C4.45063 1.14389 4.10317 1 3.74087 1C3.37857 1 3.0311 1.14389 2.77488 1.40004L2.20102 1.97298C1.54118 2.63262 1.12611 3.49764 1.02442 4.4251C0.922735 5.35256 1.1405 6.28697 1.64174 7.07391L1.64721 7.08302C4.29439 10.9996 7.66783 14.3724 11.5849 17.0189V17.0189Z" stroke="#4F4F4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <span>(123) 456 - 789</span>
                                </div>

                                <div className="flex_start_center mt2">
                                    <span className="arrow mr">
                                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.7215 8.28956C14.7215 13.6684 9.21233 16.9821 8.06744 17.6133C8.00402 17.6483 7.93277 17.6667 7.86033 17.6667C7.7879 17.6667 7.71665 17.6483 7.65322 17.6133C6.50748 16.9821 1 13.6684 1 8.28956C1 4.00158 3.57279 1 7.86076 1C12.1487 1 14.7215 4.00158 14.7215 8.28956Z" stroke="#4F4F4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M4.43042 7.8608C4.43042 8.77059 4.79183 9.64312 5.43515 10.2864C6.07848 10.9298 6.95101 11.2912 7.8608 11.2912C8.77059 11.2912 9.64312 10.9298 10.2864 10.2864C10.9298 9.64312 11.2912 8.77059 11.2912 7.8608C11.2912 6.95101 10.9298 6.07848 10.2864 5.43515C9.64312 4.79183 8.77059 4.43042 7.8608 4.43042C6.95101 4.43042 6.07848 4.79183 5.43515 5.43515C4.79183 6.07848 4.43042 6.95101 4.43042 7.8608V7.8608Z" stroke="#4F4F4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>

                                    <span>
                                        794 Murtala Mohd St 
                                        Bauchi Nigeria, 94102.
                                    </span>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <form onSubmit={handleSumit} className="contact_form">
                                <div className="group">
                                    <div className="form_group">
                                        <label htmlFor="name" className="label">Name</label>
                                        <input type="text" id="name" className="input" placeholder="John Doe" />
                                    </div>

                                    <div className="form_group">
                                        <label htmlFor="email" className="label">Email</label>
                                        <input type="email" id="email" className="input" placeholder="johndoe@email.com" />
                                    </div>
                                </div>

                                <div className="group">
                                    <div className="form_group">
                                        <label htmlFor="phone" className="label">Phone</label>
                                        <input type="phone" id="phone" className="input" placeholder="08100033344" />
                                    </div>

                                    <div className="form_group">
                                        <label htmlFor="company" className="label">Email</label>
                                        <input type="text" id="company" className="input" placeholder="AGROSYS" />
                                    </div>
                                </div>

                                <div className="form_group" style={{marginTop: "20px"}}>
                                    <label htmlFor="message" className="label">Message</label>
                                    <textarea name="message" id="message" 
                                        className="input" 
                                        placeholder="Your message..."
                                        style={{resize: "none", height: "100px"}}
                                    ></textarea>
                                </div>

                                <div className="form_group" style={{margin: "20px 0"}}>
                                    <input type="submit" value="Send" className="btn_bg"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Home;
