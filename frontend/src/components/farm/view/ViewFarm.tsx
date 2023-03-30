import * as React from "react";
import { useNavigate } from "react-router";
import { farm_products } from "../../../mocks/Mocks";

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
            <div className="map">
                {/* <iframe src={`https://maps.google.com/maps?q=${10.4669032},${9.8281224}&t=&z=15&ie=UTF8&iwloc=&output=embed`} allowFullScreen className="iframe"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.427789565833!2d9.828122414100044!3d10.466903192532035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1054d4b4b40f0469%3A0x9e739afadd2ebdbf!2sAbubakar%20Tafawa%20Balewa%20University%20(ATBU)%2C%20Bauchi.%20Gubi%20Main%20Campus!5e0!3m2!1sen!2sng!4v1680170392326!5m2!1sen!2sng" width="600" height="450" allowFullScreen loading="lazy" className="iframe"></iframe>
            </div>

            {displayFarmDetails()}
        </div>
    );
}

export default ViewFarm;