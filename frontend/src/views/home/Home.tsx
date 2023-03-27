import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import Loader from "../../components/loader/Loader";
// Images 
import image from "../../assets/image.png";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import create_account from "../../assets/images/create_account.png";
import problem_to_solve from "../../assets/images/problem_to_solve.png";

// Icons
import farm_magnt_icon from "../../assets/icons/farm_magnt_icon.png";
import farmers_connect_icon from "../../assets/icons/farmers_connect_icon.png";
import growth_tracking_icon from "../../assets/icons/growth_tracking_icon.png";
import martket_place_icon from "../../assets/icons/market_place_icon.png";
import expert_advice_icon from "../../assets/icons/expert_advice_icon.png";
import auto_reminders_icon from "../../assets/icons/auto_reminders_icon.png";



// Style
import "./Home.css";

interface FormProps {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
}

const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();
    const [toggler, setToggler] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmit: SubmitHandler<FormProps> = (data) => {
        console.log("Form data: ", data);

        setLoading(true);
        return setTimeout(() => setLoading(false), 3000);

    }

    return (
        <>
            {/* Loader */}
            {loading ? <Loader message="Sending data..." /> : null}

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
                            <a href="#contact" className="link mr">Contact</a>
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
                        <a href="#contact" className="link mr mb2">Contact</a>
                        <Link className="link mr mb2" to="/auth/login">Login</Link>
                        <Link className="link border_white" to="#">Get Started</Link>
                    </div>

                    <div className="close_btn" onClick={() => setToggler(false)}>X</div>
                </div>
                
                <div className="container">
                    {/* Banner */}
                    <div className="banner_section">
                        <div className="banner_left">
                            <h2>Manage your Farm, Get Advise & Explore, in One Place.</h2>
                            <p>
                                SmatAgro is a tech driven solution to empower local farmers leading to food 
                                security, higher crop yields, climate-smart & sustainable agriculture.
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
                            <div className="top_image"><img src={banner1} alt="Banner1" /></div>
                            <div className="bottom_image"><img src={banner2} alt="Banner2" /></div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="about_section">
                        <h2 className="h_center">Empowering Famers and Agro-Business</h2>
                        <p className="p_center">
                            Better quality produce, smart farming and access to market by engaging our 
                            local farmers with professionals through a gamified extension service platform
                        </p>

                        <div className="cards">
                            <div className="card">
                                <div className="card_image"><img src={farm_magnt_icon} alt="Icon" /></div>
                                <h4 className="card_title">Farm Management</h4>
                                <p className="card_content">
                                    Organize and manage all your farms in one place, with an intuitive tools for 
                                    tracking planting schedules, crop rotations, harvesting & after harvest.
                                </p>
                            </div>
                            
                            <div className="card">
                                <div className="card_image"><img src={farmers_connect_icon} alt="Icon" /></div>
                                <h4 className="card_title">Farmers Connect</h4>
                                <p className="card_content">
                                    Connect with other farmers and professionals from and outside your community to 
                                    share resources with our social forum and earn a recognition.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={growth_tracking_icon} alt="Icon" /></div>
                                <h4 className="card_title">Growth Tracking</h4>
                                <p className="card_content">
                                    Monitor the growth of your crops, activities and stay updated on their health status 
                                    with our easy-to-use and simple tracking tools.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={martket_place_icon} alt="Icon" /></div>
                                <h4 className="card_title">Marketplace</h4>
                                <p className="card_content">
                                    Talk about Buy and sell crops and other agricultural products directly, 
                                    Connect with local markets & whole sellers to expand your business and 
                                    make more profits.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={expert_advice_icon} alt="Icon" /></div>
                                <h4 className="card_title">Expert Advice</h4>
                                <p className="card_content">
                                    Connect with agric- extension officers to receive personalized recommendations 
                                    for your crops and real time decision support based on your specific growing 
                                    conditions and challenges.
                                </p>
                            </div>

                            <div className="card">
                                <div className="card_image"><img src={auto_reminders_icon} alt="Icon" /></div>
                                <h4 className="card_title">Auto Reminders</h4>
                                <p className="card_content">
                                    Never miss a task or important date, with our AI powered reminders you will keep 
                                    track of what need to be done and stay organized & productive.
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
                                        <li><span className="li_icon"></span> <span>Interaction design</span></li>
                                        <li><span className="li_icon"></span> <span>Finding and managing</span></li>
                                        <li><span className="li_icon"></span> <span>Information architecture</span></li>
                                        <li><span className="li_icon"></span> <span>Usability testing</span></li>
                                    </ul>

                                    <div className="flex_start_center mt2">
                                        <button className="btn_bg btn_big mr2">Get started</button>
                                        <button className="btn_outline btn_big">Talk to sales</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="account_image"><img src={create_account} alt="Image" /></div>

                        </div>
                    </div>
                </div>

                {/* The Problem to solve */}
                <div className="problem_section">
                    <div className="container">
                        <div className="problem_wrapper">
                            <div className="pro_image"><img src={problem_to_solve} alt="Image" /></div>

                            <div className="pro_content">
                                <h2 className="mb2">What problems do we solve?</h2>

                                <p>
                                    Lack of access to up-to-date information on crop cultivation & harvesting, 
                                    pest management, adopting new techniques and expert advise this result in 
                                    increasing the risk of crop failure and reducing yields and poor-quality 
                                    produce among local farmers.
                                </p>
                            </div>
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
                                    Click the button below to download our app directly.
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
                                    Click the button below to download our app directly.
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
                <div className="contact_section" id="contact">
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
                            <form onSubmit={handleSubmit(handleFormSubmit)} className="contact_form">
                                <div className="group">
                                    <div className="form_group">
                                        <label htmlFor="name" className="label">Name</label>
                                        <input type="text" id="name" className="input" 
                                            placeholder="John Doe" 
                                            {...register("name", { required: true })}
                                            required 
                                        />
                                    </div>

                                    <div className="form_group">
                                        <label htmlFor="email" className="label">Email</label>
                                        <input type="email" id="email" className="input" 
                                            placeholder="johndoe@email.com" 
                                            {...register("email", { required: true })}
                                            required 
                                        />
                                    </div>
                                </div>
                                {errors.name ? <p className="error">Name is required.</p> : null}
                                {errors.email ? <p className="error">Email is required.</p> : null}

                                <div className="group">
                                    <div className="form_group">
                                        <label htmlFor="phone" className="label">Phone</label>
                                        <input type="phone" id="phone" className="input" 
                                            placeholder="08100033344" 
                                            {...register("phone", { required: true })}
                                            required 
                                        />
                                    </div>

                                    <div className="form_group">
                                        <label htmlFor="company" className="label">Company (Optional)</label>
                                        <input type="text" id="company" className="input" 
                                            placeholder="AGROSYS"
                                            {...register("company")}
                                            />
                                    </div>
                                </div>
                                {errors.phone ? <p className="error">Phone number is required.</p> : null}

                                <div className="form_group" style={{marginTop: "20px"}}>
                                    <label htmlFor="message" className="label">Message</label>
                                    <textarea id="message" className="input" 
                                        placeholder="Your message..."
                                        style={{resize: "none", height: "100px"}}
                                        {...register("message", { required: true })}
                                        required
                                    ></textarea>
                                </div>
                                {errors.message ? <p className="error">Message is required</p> : null}

                                <div className="form_group" style={{margin: "20px 0"}}>
                                    <input type="submit" value="Send Message" className="btn_bg"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="footer_section">
                    <div className="container">
                        <div className="footer_wrapper">
                            <div className="footer_content">
                                <div className="logo mr" style={{width: "40px", height: "40px"}}>
                                    <svg width="1294" height="1294" viewBox="0 0 1294 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1293.74 0H0V1293.74H1293.74V0Z" fill="#0C7E46"/>
                                        <path d="M841.86 552.15C841.86 552.15 643.31 557.15 609.1 831.62C609.1 831.62 678.34 654.76 765.94 594.7C765.94 594.7 668.55 686.7 615.13 837.15C611.155 848.367 609.125 860.18 609.13 872.08V881.68L597.29 825.52C588.047 781.693 588.133 736.412 597.54 692.62L603.4 665.36C604.398 660.932 604.921 656.409 604.96 651.87C604.916 638.2 609.541 624.924 618.07 614.24C654.88 568.06 758.48 435.99 788.49 375.24C788.49 375.24 684.21 434.47 647.49 459.5C610.77 484.53 586.41 566.6 594.1 619.68C594.1 619.68 614.95 522.9 680.02 478.68C680.02 478.68 611.61 552.93 597.43 627.17L593.26 650.95L570.86 595.17C558.064 563.367 550.956 529.563 549.86 495.3L548.16 441.97L545.81 485.97C543.54 528.52 550.12 571.23 566.42 610.59C580.185 643.861 584.342 680.325 578.42 715.84L574.01 742.28C574.01 742.28 553.16 592.12 442.2 537.06C442.2 537.06 509.78 557.91 559 665.53C559 665.53 555.66 488.67 267 422.77C267 422.77 515.61 546.23 554.4 751.46C556.6 763.08 558.677 774.06 560.63 784.4C575.72 864.23 514.5 938.09 433.26 938.09C431.893 938.09 430.54 937.821 429.278 937.298C428.015 936.774 426.868 936.007 425.903 935.041C424.937 934.074 424.171 932.926 423.649 931.663C423.127 930.4 422.859 929.047 422.86 927.68V547.61C411.74 536.82 400.71 526.92 390.15 518.01V927.76C390.15 939.194 394.692 950.159 402.777 958.244C410.861 966.328 421.827 970.87 433.26 970.87H621.97V938.17C622.4 907.8 623.8 860.42 628.25 850.55C655.49 790.18 739.99 617.1 841.86 552.15Z" fill="white"/>
                                        <path d="M857.24 324H433.32C427.659 324 422.053 325.115 416.823 327.281C411.592 329.448 406.84 332.623 402.837 336.626C398.833 340.63 395.658 345.382 393.492 350.613C391.325 355.843 390.21 361.449 390.21 367.11V453.54C401.597 458.807 412.5 464.383 422.92 470.27V367.11C422.92 364.351 424.015 361.704 425.965 359.752C427.916 357.8 430.561 356.703 433.32 356.7H857.24C859.998 356.705 862.642 357.804 864.592 359.755C866.541 361.707 867.637 364.352 867.64 367.11V927.76C867.637 930.518 866.541 933.163 864.592 935.115C862.642 937.066 859.998 938.165 857.24 938.17H637.92V970.87H857.24C868.672 970.867 879.634 966.324 887.717 958.24C895.799 950.155 900.34 939.192 900.34 927.76V367.11C900.34 355.678 895.799 344.715 887.717 336.63C879.634 328.546 868.672 324.003 857.24 324Z" fill="white"/>
                                    </svg>
                                </div>

                                <p className="mt2" style={{fontSize: "14px"}}>
                                    Creating Sustainability Through Agriculture...
                                </p>

                                <div className="flex_start_center mt2" style={{flexWrap: "wrap"}}>
                                    {/* Facebook */}
                                    <div className="social_icon mr2 mb2">
                                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.37296 18V9.78936H9.26765L9.70104 6.5895H6.37288V4.54653C6.37288 3.6201 6.64305 2.98879 8.0385 2.98879L9.81819 2.98799V0.126072C9.51038 0.0871459 8.45386 0 7.22488 0C4.65886 0 2.90212 1.49118 2.90212 4.22972V6.5895H0V9.78936H2.90212V17.9999H6.37296V18Z" fill="#F2F2F2"/>
                                        </svg>
                                    </div>
                                    {/* Twitter */}
                                    <div className="social_icon mr2 mb2">
                                        <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.226 0.0503608V0.0471191H13.07L13.3784 0.108711C13.584 0.148697 13.7707 0.201099 13.9384 0.265933C14.1061 0.330766 14.2684 0.406411 14.4253 0.49285C14.5822 0.57929 14.7245 0.667366 14.8522 0.757047C14.9788 0.845659 15.0924 0.939668 15.193 1.03907C15.2926 1.13957 15.4478 1.1655 15.6588 1.11687C15.8698 1.06825 16.0971 1.00071 16.3405 0.914269C16.584 0.82783 16.8248 0.730579 17.0628 0.622518C17.3009 0.514456 17.4459 0.445846 17.4978 0.416671C17.5487 0.386426 17.5757 0.370218 17.579 0.368046L17.5822 0.363183L17.5984 0.355079L17.6147 0.346975L17.6309 0.33887L17.6471 0.330766L17.6504 0.325904L17.6552 0.322662L17.6601 0.31942L17.6634 0.314558L17.6796 0.309695L17.6958 0.306454L17.6926 0.330766L17.6877 0.355079L17.6796 0.379392L17.6715 0.403704L17.6634 0.419913L17.6552 0.436121L17.6471 0.460434C17.6417 0.476642 17.6363 0.498248 17.6309 0.525267C17.6255 0.552287 17.5741 0.660332 17.4767 0.849435C17.3793 1.03854 17.2576 1.23033 17.1115 1.42483C16.9654 1.61933 16.8345 1.76628 16.7187 1.8657C16.6019 1.96619 16.5245 2.03643 16.4866 2.07641C16.4488 2.11747 16.4028 2.15528 16.3487 2.18987L16.2675 2.24336L16.2513 2.25146L16.235 2.25957L16.2318 2.26443L16.2269 2.26767L16.2221 2.27091L16.2188 2.27578L16.2026 2.28388L16.1864 2.29198L16.1831 2.29685L16.1782 2.30009L16.1734 2.30333L16.1701 2.30819L16.1669 2.31305L16.162 2.3163L16.1571 2.31954L16.1539 2.3244H16.235L16.6895 2.22715C16.9925 2.16232 17.2819 2.08398 17.5579 1.99213L17.9961 1.84625L18.0448 1.83004L18.0691 1.82194L18.0854 1.81384L18.1016 1.80573L18.1178 1.79763L18.1341 1.78952L18.1665 1.78466L18.199 1.78142V1.81384L18.1909 1.81708L18.1827 1.82194L18.1795 1.8268L18.1746 1.83004L18.1698 1.83329L18.1665 1.83815L18.1633 1.84301L18.1584 1.84625L18.1535 1.84949L18.1503 1.85436L18.1471 1.85922L18.1422 1.86246L18.1341 1.87867L18.1259 1.89488L18.1211 1.89812C18.1189 1.90136 18.0502 1.9932 17.9149 2.17366C17.7797 2.3552 17.7066 2.44703 17.6958 2.44921C17.685 2.45245 17.6698 2.46866 17.6504 2.49783C17.632 2.52808 17.5173 2.64857 17.3063 2.85928C17.0953 3.06999 16.8886 3.25745 16.6863 3.42171C16.4829 3.58704 16.38 3.79018 16.3779 4.03115C16.3746 4.27103 16.3622 4.54226 16.3405 4.84481C16.3189 5.14737 16.2783 5.47423 16.2188 5.82542C16.1593 6.1766 16.0673 6.57371 15.9429 7.01673C15.8185 7.45976 15.667 7.89199 15.4884 8.31341C15.3099 8.73483 15.1232 9.11302 14.9285 9.448C14.7337 9.78298 14.5552 10.0666 14.3928 10.2989C14.2305 10.5313 14.0655 10.7501 13.8978 10.9554C13.7301 11.1607 13.518 11.3919 13.2616 11.6491C13.004 11.9052 12.8634 12.0457 12.8396 12.0705C12.8147 12.0943 12.7087 12.1829 12.5214 12.3363C12.3353 12.4908 12.1351 12.6454 11.9209 12.7999C11.7077 12.9533 11.5119 13.0814 11.3333 13.184C11.1548 13.2867 10.9395 13.4039 10.6873 13.5358C10.4363 13.6687 10.1647 13.7918 9.87255 13.9053C9.5804 14.0188 9.27201 14.1241 8.9474 14.2214C8.62278 14.3186 8.30899 14.3943 8.00601 14.4483C7.70304 14.5023 7.35948 14.5482 6.97535 14.5861L6.39915 14.6428V14.6509H5.34415V14.6428L5.20619 14.6347C5.11422 14.6293 5.03847 14.6239 4.97896 14.6185C4.91945 14.6131 4.69492 14.5834 4.30538 14.5293C3.91584 14.4753 3.61016 14.4213 3.38833 14.3672C3.16652 14.3132 2.83649 14.2106 2.39825 14.0593C1.96002 13.908 1.58509 13.7551 1.27346 13.6006C0.962911 13.4471 0.768141 13.3499 0.689146 13.3088C0.611238 13.2689 0.523591 13.2192 0.426206 13.1597L0.280129 13.0706L0.276899 13.0657L0.272013 13.0625L0.267144 13.0592L0.263898 13.0544L0.247667 13.0463L0.231436 13.0382L0.228206 13.0333L0.223321 13.0301L0.218452 13.0268L0.215205 13.022L0.211976 13.0171L0.20709 13.0138H0.198975V12.9814L0.215205 12.9847L0.231436 12.9895L0.304475 12.9976C0.353168 13.003 0.485725 13.0111 0.702131 13.022C0.918553 13.0328 1.14848 13.0328 1.39194 13.022C1.6354 13.0111 1.88429 12.9868 2.13856 12.949C2.39285 12.9112 2.69312 12.8464 3.03937 12.7545C3.38564 12.6627 3.70376 12.5535 3.99376 12.4271C4.28267 12.2996 4.48825 12.2045 4.61053 12.1418C4.73171 12.0802 4.91674 11.9657 5.16561 11.7982L5.53892 11.547L5.54217 11.5421L5.54704 11.5389L5.55192 11.5356L5.55515 11.5308L5.5584 11.5259L5.56327 11.5227L5.56815 11.5194L5.57138 11.5146L5.58761 11.5097L5.60384 11.5065L5.60709 11.4903L5.61196 11.474L5.61684 11.4708L5.62007 11.4659L5.49023 11.4578C5.40367 11.4524 5.3198 11.447 5.23865 11.4416C5.1575 11.4362 5.03036 11.4119 4.85723 11.3687C4.68411 11.3255 4.49745 11.2606 4.29726 11.1742C4.09709 11.0878 3.90232 10.9851 3.71295 10.8662C3.5236 10.7474 3.38671 10.6485 3.30231 10.5696C3.219 10.4918 3.11079 10.3816 2.97769 10.239C2.84569 10.0953 2.73099 9.94775 2.6336 9.79648C2.53622 9.6452 2.44316 9.47067 2.35445 9.27295L2.21971 8.97795L2.2116 8.95364L2.20348 8.92933L2.19861 8.91312L2.19537 8.89691L2.21971 8.90015L2.24406 8.90501L2.4226 8.92933C2.54164 8.94554 2.72829 8.95093 2.98256 8.94554C3.23685 8.94014 3.41268 8.92933 3.51007 8.91312C3.60745 8.89691 3.66697 8.8861 3.6886 8.8807L3.72107 8.8726L3.76164 8.86449L3.80222 8.85639L3.80547 8.85153L3.81034 8.84828L3.81522 8.84504L3.81845 8.84018L3.78599 8.83208L3.75353 8.82397L3.72107 8.81587L3.6886 8.80776L3.65614 8.79966C3.63451 8.79426 3.59664 8.78345 3.54253 8.76724C3.48843 8.75103 3.34235 8.6916 3.10429 8.58895C2.86625 8.4863 2.67689 8.38635 2.53622 8.28909C2.39519 8.19156 2.26073 8.0849 2.13369 7.96979C2.00709 7.85309 1.86806 7.70289 1.71656 7.5192C1.56508 7.33551 1.42982 7.12209 1.31079 6.87896C1.19177 6.63584 1.1025 6.40352 1.04298 6.182C0.983699 5.96178 0.944589 5.73664 0.926132 5.50935L0.896901 5.16898L0.913131 5.17222L0.929362 5.17708L0.945593 5.18518L0.961824 5.19329L0.978055 5.20139L0.994286 5.2095L1.24586 5.32296C1.41359 5.3986 1.62188 5.46343 1.87075 5.51746C2.11963 5.57148 2.26841 5.60121 2.3171 5.6066L2.39014 5.61471H2.53622L2.53299 5.60985L2.5281 5.6066L2.52323 5.60336L2.51998 5.5985L2.51675 5.59364L2.51187 5.59039L2.507 5.58715L2.50375 5.58229L2.48752 5.57419L2.47129 5.56608L2.46806 5.56122L2.46318 5.55798L2.45831 5.55474L2.45506 5.54987L2.43883 5.54177L2.4226 5.53367L2.41937 5.5288C2.41612 5.52663 2.36959 5.49206 2.27977 5.42507C2.19103 5.35699 2.09798 5.26893 2.0006 5.16087C1.90321 5.05281 1.80583 4.93935 1.70844 4.8205C1.61088 4.70137 1.52398 4.57391 1.44875 4.4396C1.37302 4.30453 1.29293 4.13271 1.20853 3.92417C1.12522 3.7167 1.06192 3.50761 1.01863 3.29691C0.975361 3.0862 0.951014 2.87819 0.945593 2.67288C0.940188 2.46757 0.945593 2.29198 0.961824 2.14611C0.978055 2.00023 1.01052 1.83544 1.05921 1.65175C1.1079 1.46806 1.17825 1.27356 1.27021 1.06825L1.40817 0.760289L1.41629 0.735976L1.4244 0.711664L1.42929 0.708422L1.43252 0.70356L1.43576 0.698697L1.44063 0.695455L1.44552 0.698697L1.44875 0.70356L1.452 0.708422L1.45686 0.711664L1.46175 0.714906L1.46498 0.719768L1.46823 0.724631L1.4731 0.727872L1.48121 0.744081L1.48933 0.760289L1.49421 0.763531L1.49744 0.768393L1.71656 1.01152C1.86264 1.1736 2.03577 1.3546 2.23594 1.5545C2.43614 1.7544 2.54704 1.85813 2.56868 1.8657C2.59033 1.87434 2.61737 1.89919 2.64983 1.94026C2.68229 1.98025 2.7905 2.07588 2.97445 2.22715C3.15841 2.37842 3.39916 2.55403 3.69672 2.75392C3.9943 2.95382 4.32432 3.15103 4.6868 3.34553C5.0493 3.54003 5.43884 3.71562 5.85542 3.8723C6.27202 4.02899 6.56417 4.13164 6.73189 4.18026C6.89962 4.22889 7.18635 4.29102 7.59212 4.36666C7.99789 4.4423 8.30358 4.49093 8.50916 4.51254C8.71476 4.53414 8.85543 4.54657 8.93117 4.54981L9.04478 4.55306L9.04155 4.52874L9.03667 4.50443L9.0042 4.30183C8.98257 4.16676 8.97174 3.97766 8.97174 3.73453C8.97174 3.49141 8.99068 3.2672 9.02855 3.06188C9.06643 2.85657 9.12324 2.64857 9.19897 2.43786C9.27472 2.22715 9.34885 2.05803 9.42134 1.93054C9.49493 1.80411 9.59123 1.65986 9.71025 1.49777C9.82928 1.33569 9.98348 1.16821 10.1728 0.995311C10.3622 0.822416 10.5786 0.668436 10.8221 0.533371C11.0655 0.398307 11.2901 0.295643 11.4956 0.225412C11.7012 0.155181 11.8744 0.109246 12.015 0.0876402C12.1557 0.0660344 12.226 0.0536025 12.226 0.0503608V0.0503608Z" fill="#F2F2F2"/>
                                        </svg>
                                    </div>
                                    {/* Instagram */}
                                    <div className="social_icon mr2 mb2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 9C0 5.40486 0 3.60729 0.856692 2.31255C1.23925 1.73439 1.73439 1.23925 2.31255 0.856692C3.60729 0 5.40486 0 9 0C12.5951 0 14.3927 0 15.6874 0.856692C16.2656 1.23925 16.7608 1.73439 17.1433 2.31255C18 3.60729 18 5.40486 18 9C18 12.5951 18 14.3927 17.1433 15.6874C16.7608 16.2656 16.2656 16.7608 15.6874 17.1433C14.3927 18 12.5951 18 9 18C5.40486 18 3.60729 18 2.31255 17.1433C1.73439 16.7608 1.23925 16.2656 0.856692 15.6874C0 14.3927 0 12.5951 0 9ZM13.6593 9.00023C13.6593 11.5735 11.5732 13.6596 8.99984 13.6596C6.42652 13.6596 4.34043 11.5735 4.34043 9.00023C4.34043 6.42691 6.42652 4.34082 8.99984 4.34082C11.5732 4.34082 13.6593 6.42691 13.6593 9.00023ZM8.99984 12.0832C10.7025 12.0832 12.0828 10.7029 12.0828 9.00023C12.0828 7.29753 10.7025 5.91722 8.99984 5.91722C7.29714 5.91722 5.91684 7.29753 5.91684 9.00023C5.91684 10.7029 7.29714 12.0832 8.99984 12.0832ZM13.8433 5.20155C14.4479 5.20155 14.9381 4.71138 14.9381 4.10673C14.9381 3.50207 14.4479 3.0119 13.8433 3.0119C13.2386 3.0119 12.7485 3.50207 12.7485 4.10673C12.7485 4.71138 13.2386 5.20155 13.8433 5.20155Z" fill="#F2F2F2"/>
                                        </svg>
                                    </div>
                                    {/* Linkedln */}
                                    <div className="social_icon mr2 mb2">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1.99134C0 1.41413 0.202708 0.937939 0.608108 0.56277C1.01351 0.187584 1.54055 0 2.18919 0C2.82626 0 3.34169 0.184693 3.73552 0.554112C4.14092 0.935065 4.34363 1.43145 4.34363 2.04329C4.34363 2.5974 4.14672 3.05915 3.7529 3.42857C3.3475 3.80952 2.81467 4 2.15444 4H2.13707C1.49999 4 0.984562 3.80952 0.590734 3.42857C0.196905 3.04762 0 2.56854 0 1.99134ZM0.225869 17.1429V5.57576H4.08301V17.1429H0.225869ZM6.22008 17.1429H10.0772V10.684C10.0772 10.2799 10.1236 9.96824 10.2162 9.74891C10.3784 9.35641 10.6245 9.02452 10.9546 8.75324C11.2847 8.48195 11.6988 8.34632 12.1969 8.34632C13.4942 8.34632 14.1429 9.21788 14.1429 10.961V17.1429H18V10.5108C18 8.8023 17.5946 7.50649 16.7838 6.62337C15.973 5.74026 14.9015 5.2987 13.5695 5.2987C12.0753 5.2987 10.9112 5.93939 10.0772 7.22078V7.25541H10.0598L10.0772 7.22078V5.57576H6.22008C6.24324 5.94516 6.25483 7.09378 6.25483 9.02164C6.25483 10.9495 6.24324 13.6565 6.22008 17.1429Z" fill="#F2F2F2"/>
                                        </svg>
                                    </div>
                                    {/* Youtube */}
                                    <div className="social_icon mr2 mb2">
                                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3387 13.9782L6.27646 13.9023C4.96122 13.8758 3.64269 13.9287 2.35324 13.6546C0.391672 13.2451 0.252708 11.2372 0.107296 9.55291C-0.0930658 7.18507 -0.0154997 4.77425 0.362609 2.42618C0.576064 1.10866 1.4161 0.322489 2.71518 0.236939C7.10053 -0.0735363 11.515 -0.0367417 15.8907 0.108106C16.3528 0.121385 16.8181 0.19396 17.2738 0.276571C19.5231 0.679489 19.5779 2.95489 19.7237 4.87034C19.8691 6.80557 19.8077 8.75072 19.5298 10.6728C19.3068 12.2642 18.8802 13.5987 17.0798 13.7275C14.8241 13.896 12.6201 14.0316 10.358 13.9885C10.3581 13.9782 10.3451 13.9782 10.3387 13.9782ZM7.95048 9.94924C9.65038 8.95183 11.3179 7.97104 13.008 6.98032C11.305 5.9829 9.64066 5.00212 7.95048 4.01139V9.94924Z" fill="#F2F2F2"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="footer_right">
                                <div className="footer_inner_right">
                                    <h4 className="mb2">Product</h4>
                                    <ul>
                                        <Link to="#"><li>Market place</li></Link>
                                        <Link to="#"><li>Farms</li></Link>
                                        <Link to="#"><li>Weathers</li></Link>
                                        <Link to="#"><li>Forum</li></Link>
                                        <Link to="#"><li>Recommender</li></Link>
                                    </ul>
                                </div>

                                <div className="footer_inner_right">
                                    <h4 className="mb2">Company</h4>
                                    <ul>
                                        <Link to="#"><li>About</li></Link>
                                        <Link to="#"><li>Contact Us</li></Link>
                                        <Link to="#"><li>Careers</li></Link>
                                        <Link to="#"><li>Culture</li></Link>
                                        <Link to="#"><li>Blog</li></Link>
                                    </ul>
                                </div>

                                <div className="footer_inner_right">
                                    <h4 className="mb2">Support</h4>
                                    <ul>
                                        <Link to="#"><li>Getting started</li></Link>
                                        <Link to="#"><li>Help center</li></Link>
                                        <Link to="#"><li>Server status</li></Link>
                                        <Link to="#"><li>Report a bug</li></Link>
                                        <Link to="#"><li>Chat support</li></Link>
                                    </ul>
                                </div>

                                <div className="footer_inner_right">
                                    <h4 className="mb2">Downloads</h4>
                                    <ul>
                                        <Link to="#"><li>iOS</li></Link>
                                        <Link to="#"><li>Android</li></Link>
                                        <Link to="#"><li>Windows</li></Link>
                                        <Link to="#"><li>Mac</li></Link>
                                        <Link to="#"><li>Chrome</li></Link>
                                    </ul>
                                </div>
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
