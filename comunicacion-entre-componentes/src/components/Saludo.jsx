import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h1>Buenos dias {props.persona}!</h1>
            <p>Vos tenes {props.edad} años!</p>
        </div>
    )
}

export default Saludo
