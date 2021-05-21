import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';

import '../ModalLogin/ModalLogin.css';

function ModalLog() {
    // use this hook to control the dialog
    const dialog = useDialog();

    const [value, setValue] = useState();

    return (
        <div className="modalLoginContent">
            <div className="h2ModalLogin">
                <h2>Welcome back!</h2>
                <h2>Sign In your account!</h2>
            </div>
            <input
                type="name"
                onChange={(e) => {
                setValue(e.target.value);
                }}
                className ="inputsModalLogin"
            />
            <input
                type="password"
                onChange={(e) => {
                setValue(e.target.value);
                }}
                className ="inputsModalLogin"
            />
            <button
                onClick={() => {
                // Сlose the dialog and return the value
                dialog.close(value);
                }}
                className ="buttonModalLogin"
            >
                Login
            </button>
        </div>
    );
}

function ModalLogin() {
    return (
        <div>
        <a className="log" href = " "
            onClick={async () => {
                const result = await CustomDialog(<ModalLog/>
                //     , {
                //     title: 'Welcome back! Sign In your account!',
                //     showCloseIcon: true,
                // }
                );
                console.log(result);
            }}
        >
            Log
        </a>
        </div>
    );
}

export default ModalLogin;