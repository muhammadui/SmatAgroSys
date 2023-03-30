import * as React from 'react';
import { useState } from 'react';
import { state_lga } from '../../../mocks/Mocks';

// Style
import "./Share.css";

interface ShareProps {
    show: boolean;
    setShow: Function;
}

const ShareUpdate = ({ show, setShow }: ShareProps) => {
    const [formData, setFormData] = useState({
        sendTo: "all", title: "", content: "", country: "", state: "", lga: ""
    });
    const [selectedState, setSelectedState] = useState<string>("");
    const [lga, setLga] = useState<string>("");

    const handleChange = (e: any) => {
        return setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        return setShow(false);
    }

    const handleClose = (e: any) => {
        if(e.target.className && e.target.className.startsWith("share_update_section")){
            return setShow(false);
        }
    }

    return (
        <div className={`share_update_section ${show ? 'show' : ''}`} onClick={handleClose}>
            <form onSubmit={handleSubmit}>
                <div className="flex_start_center">
                    <div className="line_content inherit">Share Update</div>
                    <div className="line"></div>
                </div>

                <div className="form_group">
                    <label htmlFor="sendTo" className="label">Send To</label>
                    <select name="sendTo" id="sendTo" onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="custom">Custom</option>
                    </select>
                </div>

                {/* Condition */}
                {
                    formData.sendTo === "all" ? null : (
                        <>
                            <div className="form_group">
                                <label htmlFor="country" className="label">Country</label>
                                <select name="country" id="country">
                                    <option value="nigeria">Nigeria</option>
                                </select>
                            </div>

                            {/* State & LGA */}
                            <div className="group">
                                <div className="form_group">
                                    <label htmlFor="state" className="label">State</label>
                                    <select name="state" id="state" onChange={(e) => setSelectedState(e.target.value)}>
                                        <option value="">Select State</option>
                                        {
                                            Object.keys(state_lga).map((state: string) => (
                                                <option value={state} key={state}>{state}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="form_group">
                                    <label htmlFor="lga" className="label">LGA</label>
                                    <select name="lga" id="lga" onChange={(e) => setLga(e.target.value)}>
                                        {selectedState && <option value="">Select LGA</option>}
                                        {
                                            selectedState && state_lga[selectedState].map((lg: string) => (
                                                <option value={lg} key={lg}>{lg}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            {/* End */}
                        </>
                    )
                }

                <div className="form_group">
                    <label htmlFor="title" className="label">Title</label>
                    <input type="text" name="title" id="title" className="input"
                        placeholder="Title"
                    />
                </div>

                <div className="form_group">
                    <textarea name="content" id="content" className="input"
                        placeholder="Content"
                    ></textarea>
                </div>

                <div className="mt2">
                    <input type="submit" className="btn_bg" value="Send"
                        style={{width: "100%", borderRadius: "4px", padding: "8px 0"}}
                    />
                </div>

                <span className="close_btn" onClick={() => setShow(false)}>X</span>

            </form>            
        </div>
    )
}

export default ShareUpdate;