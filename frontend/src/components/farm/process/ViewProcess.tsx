import * as React from "react";
import { useState } from "react";
import { farm_process } from "../../../mocks/Mocks";
import AddProcess from "./add/AddProcess";

// Style
import "./ViewProcess.css";

const ViewProcess = () => {
    const [addPro, setAddPro] = useState<boolean>(true);

    const displayFarmDetails = () => {

        return (
            <>
                <div className="table_wrapper mt2">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Date Added</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                farm_process.length ? (
                                    farm_process.map((process, index) => (
                                        <tr key={process.processId}>
                                            <td>{index + 1}</td>
                                            <td>{process.item}</td>
                                            <td>{process.quantity}</td>
                                            <td>₦{process.price}</td>
                                            <td>{new Date(process.dateAdded).toDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <p className="text_center mt2">No record.</p>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className="flex_between_center mt2">
                    <button className="btn_bg"  onClick={() => setAddPro(true)}>Add item</button>
                    <button className="btn_outline">End Process</button>
                </div>
            </>
        )
    }

    return (
        <>
            {/* Add Process */}
            <AddProcess addPro={addPro} setAddPro={setAddPro} />

            <div className="view_farm_section">
                <p className="dash_header">View Process</p>
                <hr />

                {displayFarmDetails()}
            </div>
        </>
    );
}

export default ViewProcess;