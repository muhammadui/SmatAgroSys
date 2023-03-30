import * as React from 'react';

// Style
import "./Request.css";

interface RequestProps {
    show: boolean;
    setShow: Function;
}

const Request = ({ show, setShow }: RequestProps) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();

        return setShow(false);
    }

    const handleClose = (e: any) => {
        if(e.target.className && e.target.className.startsWith("request_section")){
            return setShow(false);
        }
    }

    return (
        <div className={`request_section ${show ? 'show' : ''}`} onClick={handleClose}>
            <form onSubmit={handleSubmit}>
                <div className="flex_start_center">
                    <div className="line_content inherit">Request Services</div>
                    <div className="line"></div>
                </div>

                <div className="group">
                    <div className="form_group">
                        <label htmlFor="farmId" className="label">Select Farm</label>
                        <select name="farmId" id="farmId">
                            <option value="">------</option>
                            <option value="678998">678998</option>
                            <option value="789986">789986</option>
                            <option value="899867">899867</option>
                        </select>
                    </div>

                    <div className="form_group">
                        <label htmlFor="season" className="label">Select Season</label>
                        <select name="season" id="season">
                            <option value="">------</option>
                            <option value="irrigation">Irrigation</option>
                            <option value="green_farm_house">Green Farm House</option>
                        </select>
                    </div>
                </div>

                <div className="group">
                    <div className="form_group">
                        <label htmlFor="crop_type" className="label">Crop Type</label>
                        <select name="crop_type" id="crop_type">
                            <option value="">------</option>
                            <option value="wheat">Wheat</option>
                            <option value="onion">Onion</option>
                        </select>
                    </div>

                    <div className="form_group">
                        <label htmlFor="contact" className="label">My Contact</label>
                        <input type="phone" name="contact" id="contact" 
                            className="input" placeholder="08000050002" 
                        />
                    </div>
                </div>

                <div className="form_group">
                    <input type="submit" className="btn_bg" 
                        style={{width: "100%", borderRadius: "4px", padding: "8px 0"}}
                    />
                </div>

                <span className="close_btn" onClick={() => setShow(false)}>X</span>

            </form>            
        </div>
    )
}

export default Request;