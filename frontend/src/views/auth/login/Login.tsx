import * as React from "react";
import Loader from "../../../components/loader/Loader";

const Login = () => {

    return (
        <div className="login_section">
            <Loader message="Processing Login..." />
        </div>
    )
}

export default Login;