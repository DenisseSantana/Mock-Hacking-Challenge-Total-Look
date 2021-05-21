import React from 'react'
import './footer.css'
import flor from '../../assets/flor.png'

export default function Footer() {
    return (
        <div>
            <img src ={flor} className="flor" alt="flor"/>
            <footer> 
             © Copyright 2012 | Aviso Legal - Políticas de privacidad Total Look, S.A. de C.V. e-mail soporte@totallook.com
            </footer>
             
            
        </div>
    )
}
