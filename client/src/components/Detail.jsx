import React from 'react'
import { useDispatch, useSelector} from "react-redux"
import {PokeById,clearCard } from '../redux/actions'
import Navbar from './Navbar'
import {useEffect, useState} from 'react'
import CardDetail from './CardDetail'


function Detail (props) {
 var id=(props.match.params.id)
  const dispatch = useDispatch()
  

  var Poke = useSelector((state) => state.pokemonDetail)

  const [data , setData]= useState({
    name:"",
    weight:"",
    height:"",
    hp:"",
    attack:"",
    defense:"",
    speed:"",
    tipo:[]
  
    })


  useEffect(()=>{
    dispatch(PokeById(id));

     return()=>{
      dispatch(clearCard())
    }
  },[dispatch]  )


  return (
    <div>
      <Navbar/>
      {  
        Poke.length > 0 ?
        <CardDetail name= {Poke[0].name} img={Poke[0].img} atk={Poke[0].attack} def={Poke[0].defense} 
                    speed={Poke[0].speed} peso={Poke[0].weight} altura={Poke[0].height} hp={Poke[0].hp}
                    tipo={Poke[0].tipo}/>
    
       :<div><h2>Cargando </h2></div>

    
      
      }
    </div>
  )
}

export default Detail