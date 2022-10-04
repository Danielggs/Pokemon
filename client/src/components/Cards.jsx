import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {traerPokemon} from '../redux/actions'
import Card from './Card'
import "./Cards.css"



export default function Cards(){

    const dispatch = useDispatch()
    const AllPokemon = useSelector((state)=>state.pokemon)
  

    useEffect( () => {
        dispatch(traerPokemon())
        },[dispatch])


  return (
    
         <div className="Cards-Container">
          
           {
             AllPokemon && AllPokemon.map((el)=>{

              return  <div className="card"  key={el.id}>
                        <Card key={el.id} name={el.name} image={el.img} type={el.tipo}/>
                     </div>
             })}



         </div>
  )
}



