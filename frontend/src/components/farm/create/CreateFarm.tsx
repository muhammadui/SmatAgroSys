import * as React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { state_lga } from "../../../mocks/Mocks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

// Image
import image from "../../../assets/Image_transp.png";
// Style
import "./CreateFarm.css";

interface CreateFarmProps {
    farmSize: string;
    // country: string;
    // state: string;
    // lga: string;
    area: string;
    lat?: string;
    long?: string;
}

const CreateFarm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateFarmProps>();
    const [selectedState, setSelectedState] = useState<string>("");
    const [lga, setLga] = useState<string>("");
    const [coord, setCoord] = useState({lat: "10.4669032", long: "9.8281224"});
    const navigate = useNavigate();

    const handleCreateFarm: SubmitHandler<CreateFarmProps> = (createFormInfo) => {
        // console.log("Create Form Info: ", createFormInfo);
        toast.success("Farm created", {autoClose: 2000, pauseOnHover: false});
        return setTimeout(() => {
            return navigate("/dashboard/view_farm/1");
        }, 2000);
    }

    return (
        <div className="create_farm_section">
            <p className="dash_header">Create Farm</p>
            <hr />

            <form onSubmit={handleSubmit(handleCreateFarm)} className="form">

                <div className="flex_center_center">
                    <span className="line_content">Farm Details</span>
                    <div className="line"></div>
                </div>
                
                {/* Farm size & country */}
                <div className="group">
                    <div className="form_group">
                        <label htmlFor="farmSize" className="label">Farm Size (Ha)</label>
                        <input type="number" id="farmSize" 
                            placeholder="5" className="input"
                            {...register("farmSize", { required: true })}
                            required 
                        />
                        {errors.farmSize ? <p className="error">Farm size is required.</p> : null}
                    </div>

                    <div className="form_group">
                        <label htmlFor="country" className="label">Country</label>
                        <select name="country" id="country">
                            <option value="nigeria">Nigeria</option>
                            {/* {selectedState && <option value="">Country</option>} */}
                        </select>
                    </div>
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

                {/* Area */}
                <div className="form_group">
                    <label htmlFor="area" className="label">Area</label>
                    <input type="text" id="area" 
                        placeholder="Fadama" className="input"
                        {...register("area", { required: true })}
                        required 
                    />
                    {errors.farmSize ? <p className="error">Area is required.</p> : null}
                </div>

                {/* Coordinate (Lat & Long) */}
                <div className="group">
                    <div className="form_group">
                        <label htmlFor="lat" className="label">Latitude (Lat)</label>
                        <input type="number" id="lat" 
                            placeholder="590" className="input"
                            value={coord.lat}
                            onChange={(e) => setCoord({...coord, lat: e.target.value})}
                            // {...register("lat", { required: true })}
                            // required 
                        />
                        {/* {errors.lat ? <p className="error">Latitude (Lat) is required.</p> : null} */}
                    </div>

                    <div className="form_group">
                        <label htmlFor="long" className="label">Longitude (Long)</label>
                        <input type="number" id="long" 
                            placeholder="720" className="input"
                            value={coord.long}
                            onChange={(e) => setCoord({...coord, long: e.target.value})}
                            // {...register("long", { required: true })}
                            // required 
                        />
                        {/* {errors.long ? <p className="error">Longitude (Long) is required.</p> : null} */}
                    </div>
                </div>

                {/* Map */}
                <div className="map" id="map">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.397037804678!2d9.813656614098347!3d10.310075592638974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d74a50501459%3A0x1ecf57146aa7d342!2sGRA!5e0!3m2!1sen!2sng!4v1680167865484!5m2!1sen!2sng" allowFullScreen={true} loading="lazy" className="iframe"></iframe> */}
                    <iframe src={`https://maps.google.com/maps?q=${coord.lat},${coord.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`} allowFullScreen className="iframe"></iframe>
                    {/* <img src={image} alt="Map" /> */}

                </div>

                <div className="form_group">
                    <input type="submit" value="Create" className="reg_btn" />
                </div>

            </form>
        </div>
    )
}

export default CreateFarm;