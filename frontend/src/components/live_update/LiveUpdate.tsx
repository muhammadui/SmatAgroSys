import * as React from 'react';
import { useState } from 'react';

import ShareUpdate from './share/Share';

// Style
import "./LiveUpdate.css";

const LiveUpdate = () => {
    const [showShareUpdateForm, setShowShareUpdateForm] = useState<boolean>(false);

    const formatUpdates = () => {
        
        return (
            <div className="table_wrapper mt2">
                <table className="table no_wrap">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Title</th>
                            <th>Send To</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Green House Farm</td>
                            <td>All</td>
                            <td>{new Date().toDateString()}</td>
                            <td><span className="btn_bg">View</span></td>
                        </tr>
   
                        <tr>
                            <td>2</td>
                            <td>Plant Disease (Rice)</td>
                            <td>Ringim LGA</td>
                            <td>{new Date().toDateString()}</td>
                            <td><span className="btn_bg">View</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <>
            {/* Share Update Form */}
            <ShareUpdate show={showShareUpdateForm} setShow={setShowShareUpdateForm} />

            <div className="live_update_section">
                <div className="flex_between_center">
                    <p className="dash_header mr mb">Share Updates</p>
                    
                    <button className="btn_bg mb" 
                        style={{borderRadius: "4px"}}
                        onClick={() => setShowShareUpdateForm(true) }
                    >Share Update</button>
                </div>
                <hr />

                {/* Services */}
                {formatUpdates()}
            </div>
        </>
    )
}

export default LiveUpdate;