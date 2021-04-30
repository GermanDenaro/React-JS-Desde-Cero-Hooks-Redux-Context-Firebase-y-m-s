import React, { useEffect } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion,  siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion} from '../redux/pokeDucks'
import Detalle from './Detalle'

const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    },[dispatch])

    return (
        <div className='row'>

            <div className="col-md-6">
                

                <h3>Lista de Pokemones</h3>

                <br/>
                <div className='d-flex justify-content-between'>
                {
                    pokemones.length === 0 &&
                    <button onClick={() => dispatch(obtenerPokemonesAccion())} className='btn btn-dark'>Get Pokemones</button>
                }

{
                    previous &&
                    <button onClick={() => dispatch(anteriorPokemonAccion())} className='btn btn-dark'>Anterior</button>
                }

                {
                    next &&
                    <button onClick={() => dispatch(siguientePokemonAccion(20))} className='btn btn-dark' >Siguiente</button>
                }
                
                
                </div>

               
                
                
                <ul className='list-group mt-3'>
                    {
                        pokemones.map(item => (
                            <li key={item.name} className='list-group-item text-uppercase'>
                                {item.name}
                                <button className="btn btn-info btn-sm float-right"
                                onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                                >
                                    Detalles
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="cold-md-6">
                <h3>Detalle del Pokemon</h3>
                    <Detalle/>
            </div>
        </div>
    )
}

export default Pokemones
