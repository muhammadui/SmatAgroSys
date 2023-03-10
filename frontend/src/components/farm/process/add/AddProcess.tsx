import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

// Style
import "./AddProcess.css";

interface ProParamProps {
    addPro: boolean;
    setAddPro: Function;
}

interface AddProcessProps {
    item: string;
    quantity: string;
    price: number;
    date: string;
}

const AddProcess = ({ addPro, setAddPro}: ProParamProps ) => {
    const { register, handleSubmit, formState: { errors } } = useForm<AddProcessProps>();

    const handleClose = (e: any) => {
        const cond = e.target.className.startsWith("add_process_section");
        if(cond){return setAddPro(false)}
    }

    const handleAddProcess: SubmitHandler<AddProcessProps> = (proInfo) => {
        // console.log("Process info: ", proInfo);
        toast.success("Item added", { pauseOnHover: false, autoClose: 3000});
        setAddPro(false);
    }

    return (
        <div className={`add_process_section ${addPro ? 'show' : ''}`} onClick={handleClose}>
            <form onSubmit={handleSubmit(handleAddProcess)} className="form">
                <div className="form_group">
                    <label htmlFor="item" className="label">Item</label>
                    <input type="text" id="item" placeholder="Fertilizer" className="input" 
                        {...register("item", { required: true })}
                        required 
                    />
                    {errors.item ? <p className="error">Item is required.</p> : null}
                </div>

                <div className="form_group">
                    <label htmlFor="quantity" className="label">Quantity</label>
                    <input type="number" id="quantity" placeholder="Fertilizer" className="input" 
                        {...register("quantity", { required: true })}
                        required 
                    />
                    {errors.quantity ? <p className="error">Quantity is required.</p> : null}
                </div>

                <div className="form_group">
                    <label htmlFor="price" className="label">Price</label>
                    <input type="number" id="price" placeholder="100" className="input" 
                        {...register("price", { required: true })}
                        required 
                    />
                    {errors.price ? <p className="error">Price is required.</p> : null}
                </div>

                <div className="form_group">
                    <label htmlFor="date" className="label">Date</label>
                    <input type="date" id="date" className="input" 
                        {...register("date", { required: true })}
                        required 
                    />
                    {errors.date ? <p className="error">Date is required.</p> : null}
                </div>

                <div className="form_group">
                    <input type="submit" value="Add" className="reg_btn" />
                </div>

                <span className="close_btn" onClick={() => setAddPro(false)}>X</span>

                {/* <div className="flex_between_center mt2">
                    <span className="btn_bg">Exit</span>
                    <input type="submit" value="Add" className="btn_bg" />
                </div> */}
            </form>

        </div>
    )
}

export default AddProcess;