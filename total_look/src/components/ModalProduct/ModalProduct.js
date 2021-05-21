import React, { useState } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';

//import './modalProduct.css';

import logo from '../../logo.svg';

function ModalPro() {
  const dialog = useDialog();

  const [value, setValue] = useState();

  return (
    <div>
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
            <h3>Elige:</h3>
            <label>Número de articulos:</label>
            <input
                type="value"
                onChange={(e) => {
                setValue(e.target.value);
                }}
            />
            <label>Talla: </label>
            <input
                type="text"
                onChange={(e) => {
                setValue(e.target.value);
                }}
            />
            <label>Color: </label>
            <input
                type="text"
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
                Agregar al carrito
            </button>
        </div>
    </div>
  );
}

function ModalProduct() {
    return (
        <div>
        <button
            onClick={async () => {
            const result = await CustomDialog(<ModalPro />, {
                title: 'Welcome back! Sign In your account!',
                showCloseIcon: true,
            });
            console.log(result);
            }}
        >
        Product
        </button>
        </div>
    );
}

export default ModalProduct;