import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';

import '../ModalSignInFake/ModalSignIn.css';

function ModalLog() {
    // use this hook to control the dialog
    const dialog = useDialog();

    const [value, setValue] = useState();

    return (
        <div className="modalSignInContent">
            <div className="h2ModalSignIn">
                <h2>Welcome back!</h2>
                <h2>Sign In your account!</h2>
                <h2> Holi </h2>
            </div>
            <input
                type="name"
                onChange={(e) => {
                setValue(e.target.value);
                }}
                className ="inputsModalSignIn h2ModalSignIn"
            />
            <input
                type="password"
                onChange={(e) => {
                setValue(e.target.value);
                }}
                className ="inputsModalSignIn"
            />
            <button
                onClick={() => {
                // Сlose the dialog and return the value
                dialog.close(value);
                }}
                className ="buttonModalSignIn h2ModalSignIn"
            >
                SignIn
            </button>
        </div>
    );
}

function ModalSignIn() {
    return (
        <div>
        <a className="log h2ModalSignIn" href = " "
            onClick={async (e) => {
                e.preventDefault();
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

export default ModalSignIn;