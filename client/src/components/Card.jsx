import React from 'react'
import "./Card.css"


const Card = ({name,type,image}) => {
  return (
    <div className="card__giratorio">
    <div className="card__giratorio-contenido">
        <div className="card__giratorio-contenido--frente">
            <img src={image} alt="img not found"/>
        </div>
        <div className="card__giratorio-contenido--trasero">   
            <h1>{name}</h1>
            {
            type.map((el)=>{
                return <p>{el}</p>
            }
            )}
        </div>
    </div>
</div>
  )
}

export default Card