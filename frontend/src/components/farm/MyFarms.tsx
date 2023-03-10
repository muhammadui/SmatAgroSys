import * as React from "react";
import { useNavigate } from "react-router";
import { farms } from "../../mocks/Mocks";

// Style
import "./MyFarms.css";

const MyFarms = () => {
    const navigate = useNavigate();

    const displayFarms = () => {
        return (
            <>
                <div className="table_wrapper mt2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Farm Id</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>Area</th>
                                <th>Size/Ha</th>
                                <th>Date Created</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                farms.map((farm) => (
                                    <tr key={farm.farmId}>
                                        <td>{farm.farmId}</td>
                                        <td>{farm.country}</td>
                                        <td>{farm.state}</td>
                                        <td>{farm.area}</td>
                                        <td>{farm.size}</td>
                                        <td>{new Date(farm.createdAt).toDateString()}</td>
                                        <td className={farm.status === "active" ? 'text_orange' : ''}>
                                            {farm.status === "active" ? "Active" : "Not Active"}
                                        </td>
                                        <td>
                                            <button className="btn_outline"
                                                onClick={() => navigate(`/dashboard/view_farm/${farm.farmId}`)}
                                            >View</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            
                <div className="mt">
                    <button className="btn_bg radius" 
                        onClick={() => navigate("/dashboard/create_farm")}
                    >Create farm</button>
                </div>
            </>
        )
    }

    return (
        <div className="farm_section">
            <p className="dash_header">Farms</p>
            <hr />

            {displayFarms()}
        </div>
    )
}

export default MyFarms;