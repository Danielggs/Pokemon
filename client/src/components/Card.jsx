import React from 'react'
import "./Card.css"


const Card = ({name,type,image}) => {

    var img= "https://www.kindpng.com/picc/m/316-3164350_pokemon-design-symbol-sign-icon-pokeball-catch-hd.png"
  return (
    <div className="card__giratorio">
    <div className="card__giratorio-contenido">
        <div className="card__giratorio-contenido--frente">
            <img src={image? image: "https://www.kindpng.com/picc/m/316-3164350_pokemon-design-symbol-sign-icon-pokeball-catch-hd.png"} alt="img not found"/>
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