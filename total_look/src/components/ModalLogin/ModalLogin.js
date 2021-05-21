import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';

import "./modalLogin.css";

function ModalLog() {
    // use this hook to control the dialog
    const dialog = useDialog();

    const [value, setValue] = useState();

    return (
        <div className="modalLoginContent">
        <input
            type="name"
            onChange={(e) => {
            setValue(e.target.value);
            }}
        />
        <input
            type="password"
            onChange={(e) => {
            setValue(e.target.value);
            }}
        />
        <button
            onClick={() => {
            // Сlose the dialog and return the value
            dialog.close(value);
            }}
        >
            Login
        </button>
        </div>
    );
}

function ModalLogin() {
    return (
        <div>
        <button
            onClick={async () => {
                const result = await CustomDialog(<ModalLog />, {
                    title: 'Welcome back! Sign In your account!',
                    showCloseIcon: true,
                });
                console.log(result);
            }}
        >
            Login
        </button>
        </div>
    );
}

export default ModalLogin;