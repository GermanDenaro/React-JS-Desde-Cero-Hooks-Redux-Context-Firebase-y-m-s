import React from 'react'
import Imagen from './Imagen'

const Comentarios = (props) => {
    return (
        <div className='media'>
            <div className="media-body">
                <Imagen urlImagen={props.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{props.persona}</h5>
                    {props.texto}
                </div>
            </div>
            
        </div>
    )
}

export default Comentarios
