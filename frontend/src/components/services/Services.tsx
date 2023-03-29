import * as React from "react";
import { useState } from "react";
import FarmerServices from "./farmers/services/FarmerServices";
import ExtensionOfficerServices from "./ex_officers/services/ExtensionOfficerServices";

const Services = () => {
    const [role, setRole] = useState<string>("farmer");
    const roleObj = {farmer: "Farmers", ex_officer: "Extension Officers"}

    const handleRole = () => setRole(role === "farmer" ? "ex_officer" : "farmer");

    return (
        <>
            <div className="flex_between_center mb">
                <button className="btn_outline mb"
                    style={{borderRadius: "4px"}}
                    onClick={handleRole}
                >Toggle</button>
                <p className="text_primary mb">Demo for: {roleObj[role]}</p>
            </div>

            {role === "farmer" ? <FarmerServices /> : <ExtensionOfficerServices />}
        </>
    )
}

export default Services;