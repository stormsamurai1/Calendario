import React from 'react'
import { Link } from 'react-router-dom'
export default function Calendario(){
    return(
        <div className="calendario">
            {
                [...Array(32)].map((e,i)=>
                <Link to="/teste" key={i} className="dia"> {i} </Link>
                )
            } 
        </div>
    )
}