import React from "react";
import '../style/Testimonio.css'

function Testimonio(){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' 
                src={require('../images/avatar-1.png')}
                alt='Foto de Testimonio'/>
            <div className='texto-testimonio'>
                <p className='nombre-testimonio'>Richard en Islas Feroe</p>
                <p className='cargo-testimonio'>Programador web</p>
                <p className='texto-testimonio'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>
    );

}

export default Testimonio;