import * as React from "react";
import { useNavigate } from "react-router";
import { farm_products } from "../../../mocks/Mocks";

// Image
import image from "../../../assets/Image_transp.png";
// Style
import "./ViewFarm.css";

const ViewFarm = () => {
    const navigate = useNavigate();

    const displayFarmDetails = () => {

        return (
            <div className="table_wrapper mt2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Crop</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            farm_products.length ? (
                                farm_products.map((product, index) => (
                                    <tr key={product.productId}>
                                        <td>{index + 1}</td>
                                        <td>{product.name}</td>
                                        <td>{new Date(product.startDate).toDateString()}</td>
                                        <td>{new Date(product.endDate).toDateString()}</td>
                                        <td className={product.status ? "text_orange" : ''}>
                                            {product.status ? "On-process" : "Harvested"}
                                        </td>
                                        <td>
                                            <button className="btn_outline"
                                                onClick={() => navigate(`/dashboard/view_process/${product.productId}`)}
                                            >View process</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p className="text_center mt2">No record.</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div className="view_farm_section">
            <p className="dash_header">View Farm</p>
            <hr />

            {/* Map */}
            <div className="map"><img src={image} alt="Map" /></div>

            {displayFarmDetails()}
        </div>
    );
}

export default ViewFarm;