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
                

                {/* Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Home;
