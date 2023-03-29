import * as React from 'react';
import { useState } from 'react';

import Request from '../request/Request';

// Style
import "./FarmerServices.css";

const FarmerServices = () => {
    const [showRequestForm, setShowRequestForm] = useState<boolean>(false);

    const formatServices = () => {
        
        return (
            <div className="table_wrapper mt2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Season</th>
                            <th>Crop Type</th>
                            <th>Request Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Irrigation</td>
                            <td>Wheat</td>
                            <td>{new Date().toDateString()}</td>
                            <td className="pending">Pending</td>
                            <td><span className="btn_bg">View</span></td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Green House Farm</td>
                            <td>Onion</td>
                            <td>{new Date().toDateString()}</td>
                            <td className="connected">Connected</td>
                            <td><span className="btn_bg">View</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <>
            {/* Request Form */}
            <Request show={showRequestForm} setShow={setShowRequestForm} />

            <div className="farmer_services_section">
                <div className="flex_between_center">
                    <p className="dash_header mr mb">Extension Services</p>
                    
                    <button className="btn_bg mb" 
                        style={{borderRadius: "4px"}}
                        onClick={() => setShowRequestForm(true) }
                    >Request services</button>
                </div>
                <hr />

                {/* Services */}
                {formatServices()}
            </div>
        </>
    )
}

export default FarmerServices;