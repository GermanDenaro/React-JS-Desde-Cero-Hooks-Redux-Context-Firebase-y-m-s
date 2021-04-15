import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()

    const [civ, setCiv] = useState([]);

    useEffect(() => {
         const obtenerDatos = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const users =  await data.json()
        setCiv(users)
        }
        obtenerDatos()
    },[id])

   
    return (
        <div>
            <h3>{civ.name}</h3>
            <p>{civ.team_bonus}</p>
        </div>
        )
    }


export default User
