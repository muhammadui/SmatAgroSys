import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Image
import image from "../../assets/Image_transp.png";
// Style
import "./OTP.css";

const OTP = () => {
    const [code, setCode] = useState({
        digit1: "", digit2: "", digit3: "", 
        digit4: "", digit5: ""
    });
    const [disableBtn, setDisableBtn] = useState<boolean>(true);

    useEffect(() => {

        const firstDigitEl = document.querySelector("#digit1") as HTMLElement;
        firstDigitEl?.focus();
        
    }, []);

    const handleKeyUp = (e: any) => {
        if(Object.values(code).every((val) => val.length > 0)){setDisableBtn(false)}
        else { setDisableBtn(true)}
        

        if(e.key.toLowerCase() === "backspace"){
            const digits = ["digit1", "digit2", "digit3", "digit4", "digit5"];
            setCode({...code, [e.target.name]: ""});
            // return e.target.focus();
            const idx = digits.indexOf(e.target.name);
            if(idx === 0){return e.target.focus();} 
            return e.target.previousSibling.focus();
        }

        if(e.target.value && e.target.name !== "digit5"){ 
            return e.target.nextSibling.focus(); 
        }
    }

    const handleChange = (e: any) => {
        const value = e.target.value;
        if(value.length > 1){
            return setCode({...code, [e.target.name]: value[value.length - 1]});
        }
        return setCode({...code, [e.target.name]: value});
    }

    const handleVerifyCode = (e: any) => {
        e.preventDefault();

    }

    return (
        <div className="otp_section">
            <div className="otp_left">
                <div className="image"><img src={image} alt="Image" /></div>
            </div>
            
            <div className="otp_right">
                <form className="form" onSubmit={handleVerifyCode}>
                    <p className="text_center mb2">
                        We have sent you a one time verification code
                        to your number ending with {"8423"}
                    </p>

                    <div className="verfication_wrapper">
                        <input type="number" name="digit1" id="digit1" value={code.digit1} onChange={handleChange} onKeyUp={handleKeyUp} />
                        <input type="number" name="digit2" id="digit2" value={code.digit2} onChange={handleChange} onKeyUp={handleKeyUp} />
                        <input type="number" name="digit3" id="digit3" value={code.digit3} onChange={handleChange} onKeyUp={handleKeyUp} />
                        <input type="number" name="digit4" id="digit4" value={code.digit4} onChange={handleChange} onKeyUp={handleKeyUp} />
                        <input type="number" name="digit5" id="digit5" value={code.digit5} onChange={handleChange} onKeyUp={handleKeyUp} />
                    </div>

                    <div className="form_group">
                        <input type="submit" value="Verify" className="otp_btn" 
                            disabled={disableBtn ? true : false}
                        />
                    </div>

                    <div className="text_center mt">
                        <span className="mr">Didn't get a security code?</span>
                        <Link className="span_btn text_primary mt" to="#">re-send it</Link>
                    </div>

                </form>
            </div>

            <Link className="back_btn" to="/"><span>Cancel</span></Link>
        </div>
    )
}

export default OTP;