import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/loader/Loader";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

// Image
import image from "../../../assets/Image_transp.png";
// Style
import "./Register.css";

interface RegisterProps {
    email: string;
    phone: string;
    fullName: string;
    password: string;
    vPassword: string;
}

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>();
    const [regAs, setRegAs] = useState<string>("");
    // const [googleRegister, setGoogleRegister] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [loaderMsg, setLoaderMsg] = useState<string>("");

    const handleRegister: SubmitHandler<RegisterProps> = (regInfo) => {
        if(!regAs){
            return toast.error("Select registering state (Farmer | Extension Officer).", {
                pauseOnHover: false, autoClose: 3000
            });
        }
        
        console.log("Register info: ", regInfo);
        setLoading(true);
        setLoaderMsg("Processing reg info...");
        
        return setTimeout(() => {
            setLoaderMsg("");
            setLoading(false);
            toast.success("Feature coming soon...", { pauseOnHover: false, autoClose: 2000});
        }, 3000);
    }

    const handleGoogleRegister = () => {
        setLoading(true);
        setLoaderMsg("Processing reg via Google...");
        
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

            <div className="register_section">
                <div className="register_left">
                    <div>
                        <div className="content">
                            <h2>Start your <br /> journey with us</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Voluptatum perspiciatis officia animi ab quae velit beatae 
                                incidunt saepe, voluptatem veniam!
                            </p>
                        </div>

                        <div className="image_wrapper">
                            <div className="image"><img src={image} alt="Image" /></div>
                        </div>
                    </div>

                </div>

                <div className="register_right">
                    <form className="form" onSubmit={handleSubmit(handleRegister)}>
                        <h2>Create an Account</h2>

                        <div className="form_group">
                            <p className="mb2">I am registering as a;</p>
                            <div className="flex_between_center">
                                <span className={`reg_as ${regAs === "farmer" ? 'bg' : ''} mr`} 
                                    onClick={() => setRegAs("farmer")}
                                >Farmer</span>
                                <span className={`reg_as ${regAs === "extensionOfficer" ? 'bg' : ''}`} 
                                    onClick={() => setRegAs("extensionOfficer")}
                                >Extension Officer</span>
                            </div>
                        </div>

                        <div className="form_group">
                            <label htmlFor="fullName" className="label">Full Name</label>
                            <input type="fullName" id="fullName" 
                                placeholder="John Doe" className="input"
                                {...register("fullName", { required: true })}
                                required 
                            />
                            {errors.fullName ? <p className="error">Full Name is required.</p> : null}
                        </div>

                        <div className="form_group">
                            <label htmlFor="email" className="label">Email</label>
                            <input type="email" id="email" 
                                placeholder="johndoe@email.com" className="input"
                                {...register("email", { required: true })}
                                required 
                            />
                            {errors.email ? <p className="error">Email is required.</p> : null}
                        </div>

                        <div className="form_group">
                            <label htmlFor="phone" className="label">Phone</label>
                            <input type="phone" id="phone" 
                                placeholder="09000008600" className="input"
                                {...register("phone", { required: true })}
                                required 
                            />
                            {errors.phone ? <p className="error">Phone number is required.</p> : null}
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

                        <div className="form_group">
                            <label htmlFor="vPassword" className="label">Confirm Password</label>
                            <input type="password" id="vPassword" 
                                placeholder="Confirm Password" className="input"
                                {...register("vPassword", { required: true })}
                                required 
                            />
                            {errors.vPassword ? <p className="error">Confirm Password is required.</p> : null}
                        </div>

                        <div className="form_group">
                            <input type="submit" value="Create Account" className="reg_btn" />
                        </div>

                        <div className="google_sign_in_out_wrapper" onClick={handleGoogleRegister}>
                            <span className="icon mr">
                                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22.54 11.7615C22.54 10.946 22.4668 10.1619 22.3309 9.40918H11.5V13.8576H17.6891C17.4225 15.2951 16.6123 16.513 15.3943 17.3285V20.214H19.1109C21.2855 18.2119 22.54 15.2637 22.54 11.7615Z" fill="#4285F4"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 22.9998C14.605 22.9998 17.2081 21.97 19.1109 20.2137L15.3943 17.3282C14.3645 18.0182 13.0472 18.4259 11.5 18.4259C8.50474 18.4259 5.96951 16.403 5.06519 13.6848H1.22314V16.6644C3.11542 20.4228 7.00451 22.9998 11.5 22.9998Z" fill="#34A853"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.06523 13.685C4.83523 12.995 4.70455 12.2579 4.70455 11.5C4.70455 10.742 4.83523 10.005 5.06523 9.31499V6.33545H1.22318C0.444318 7.88795 0 9.64431 0 11.5C0 13.3557 0.444318 15.112 1.22318 16.6645L5.06523 13.685Z" fill="#FBBC05"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 4.57386C13.1884 4.57386 14.7043 5.15409 15.8961 6.29364L19.1945 2.99523C17.2029 1.13955 14.5997 0 11.5 0C7.00451 0 3.11542 2.57705 1.22314 6.33545L5.06519 9.315C5.96951 6.59682 8.50474 4.57386 11.5 4.57386Z" fill="#EA4335"/>
                                </svg>
                            </span> 
                            <span>Sign up with Google</span> 
                        </div>
                        
                        <div className="text_center mt">
                            <span className="mr">Already have an account?</span>
                            <Link className="span_btn text_primary mt" to="/auth/login">Login</Link>
                        </div>

                    </form>
                </div>

                <Link className="back_btn" to="/auth/login">
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

export default Register;