import React from 'react'
import "./CardDetail.css"



function CardDetail ({name ,img, atk ,def, speed ,peso ,altura ,hp, tipo}) {

    
  return (
    <div className="Card-detail-Container">
        <div className="Card">
           <div className="name-detail"> <h1>{name}</h1> </div>
           <div className="img_detail"> <img src={img? img: "https://www.kindpng.com/picc/m/316-3164350_pokemon-design-symbol-sign-icon-pokeball-catch-hd.png"} alt="no img" /></div>
           <div className="hp_detail"><h3>Attack</h3> <p>{atk}</p></div>
           <div className="atk_detail"><h3>Defense</h3> <p>{def}</p></div>
           <div className="def_detail"><h3>Speed</h3> <p>{speed}</p></div>
           <div className="speed_detail"><h3>weight</h3> <p>{peso}</p></div>
           <div className="peso_detail"><h3>height</h3><p>{altura}</p></div>
           <div className="altura_detail"><h3>HP</h3> <p>{hp}</p></div>
            <div className="tipo-titulo"> <h3>Tipos</h3></div>
           {tipo.map((el) => {
          return (
            <div> 
              <span className="list">{el}</span>              
              </div>
          );
            })}
        </div>
           


    </div>
  )
}

export default CardDetail