import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

// Image
import image from "../../../assets/Image_transp.png";
// Style
import "./Login.css";

interface LoginProps {
    loginId: string;
    password: string;
    rememberMe?: boolean;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>();
    // const [googleLogin, setGoogleLogin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [loaderMsg, setLoaderMsg] = useState<string>("");

    const handleLogin: SubmitHandler<LoginProps> = (loginInfo) => {
        console.log("Login info: ", loginInfo);
        setLoading(true);
        setLoaderMsg("Processing login info...");
        
        return setTimeout(() => {
            setLoaderMsg("");
            setLoading(false);
            toast.success("Feature coming soon...", { pauseOnHover: false, autoClose: 2000});
        }, 3000);
    }

    const handleGoogleLogin = () => {
        setLoading(true);
        setLoaderMsg("Processing login via Google...");
        
        return setTimeout(() => {
            setLoading(false);
            setLoaderMsg("");
            toast.success("Feature coming soon...", { pauseOnHover: false, autoClose: 2000});
        }, 3000);
    }

    return (
        <>
            {/* Loader */}
            {loading ? <Loader message={loaderMsg}  /> : null}

            <div className="login_section">
                <div className="login_left">
                    <div className="image"><img src={image} alt="Image" /></div>
                </div>

                <div className="login_right">
                    <form className="form" onSubmit={handleSubmit(handleLogin)}>
                        <h2>Sign in</h2>
                        <p>Sign in to get access to your dashboard.</p>

                        <div className="flex_center_center">
                            <div className="line"></div>
                            <span className="line_content absolute_center">Sign in</span>
                        </div>

                        <div className="form_group">
                            <label htmlFor="loginId" className="label">Login ID</label>
                            <input type="text" id="loginId" 
                                placeholder="Username" className="input"
                                {...register("loginId", { required: true })}
                                required 
                            />
                            {errors.loginId ? <p className="error">Login ID is requied.</p> : null}
                        </div>

                        <div className="form_group">
                            <label htmlFor="password" className="label">Password</label>
                            <input type="password" id="password" 
                                placeholder="Password" className="input"
                                {...register("password", { required: true })}
                                required 
                            />
                            {errors.password ? <p className="error">Password is required.</p> : null}
                        </div>

                        <Link className="span_btn text_primary mt" to="#">Forget Password?</Link>

                        <div className="flex_start_center mt">
                            <input type="checkbox" id="rememberMe" className="checkbox mr" 
                                {...register("rememberMe", { required: false })}
                            />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>

                        <div className="form_group">
                            <input type="submit" value="Submit" className="login_btn" />
                        </div>

                        <div className="google_signin_wrapper" onClick={handleGoogleLogin}>
                            <span className="icon mr">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.54 11.7615C22.54 10.946 22.4668 10.1619 22.3309 9.40918H11.5V13.8576H17.6891C17.4225 15.2951 16.6123 16.513 15.3943 17.3285V20.214H19.1109C21.2855 18.2119 22.54 15.2637 22.54 11.7615Z" fill="#4285F4"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 22.9998C14.605 22.9998 17.2081 21.97 19.1109 20.2137L15.3943 17.3282C14.3645 18.0182 13.0472 18.4259 11.5 18.4259C8.50474 18.4259 5.96951 16.403 5.06519 13.6848H1.22314V16.6644C3.11542 20.4228 7.00451 22.9998 11.5 22.9998Z" fill="#34A853"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.06523 13.685C4.83523 12.995 4.70455 12.2579 4.70455 11.5C4.70455 10.742 4.83523 10.005 5.06523 9.31499V6.33545H1.22318C0.444318 7.88795 0 9.64431 0 11.5C0 13.3557 0.444318 15.112 1.22318 16.6645L5.06523 13.685Z" fill="#FBBC05"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 4.57386C13.1884 4.57386 14.7043 5.15409 15.8961 6.29364L19.1945 2.99523C17.2029 1.13955 14.5997 0 11.5 0C7.00451 0 3.11542 2.57705 1.22314 6.33545L5.06519 9.315C5.96951 6.59682 8.50474 4.57386 11.5 4.57386Z" fill="#EA4335"/>
                                </svg>
                            </span> 
                            <span>Sign in with Google</span> 
                        </div>
                        
                        <div className="text_center mt">
                            <span className="mr">Didn't have an account yet?</span>
                            <Link className="span_btn text_primary mt" to="/auth/register">Create New</Link>
                        </div>


                    </form>
                </div>

                <Link className="back_btn" to="/">
                    <span className="arrow mr">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4609 15.3457L3 9.00005L11.4609 2.6544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.00009 9L21 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>

                    <span>Back</span>
                </Link>
            </div>
        </>
    )
}

export default Login;