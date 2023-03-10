import * as React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { state_lga } from "../../../mocks/Mocks";

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

    const handleCreateFarm: SubmitHandler<CreateFarmProps> = (createFormInfo) => {
        console.log("Create Form Info: ", createFormInfo);
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
                            {...register("lat", { required: true })}
                            required 
                        />
                        {errors.lat ? <p className="error">Latitude (Lat) is required.</p> : null}
                    </div>

                    <div className="form_group">
                        <label htmlFor="long" className="label">Longitude (Long)</label>
                        <input type="number" id="long" 
                            placeholder="720" className="input"
                            {...register("long", { required: true })}
                            required 
                        />
                        {errors.long ? <p className="error">Longitude (Long) is required.</p> : null}
                    </div>
                </div>

                {/* Map */}
                <div className="map"><img src={image} alt="Map" /></div>

                <div className="form_group">
                    <input type="submit" value="Create" className="reg_btn" />
                </div>

            </form>
        </div>
    )
}

export default CreateFarm;