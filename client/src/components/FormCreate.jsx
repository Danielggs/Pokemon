import React,{useState ,useEffect} from 'react'
import{crearPokemon,traerTipos}from '../redux/actions'
import Navbar from './Navbar'
import { useSelector , useDispatch} from 'react-redux';
import "./FormCreate.css";

function validate(input){

  let error ={}
 


  if(!input.name){
    error.name = "se requiere nombre"
    console.log("error 1A")
  }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.name)){
    error.name = "Solo se permiten letras"
    console.log("error 1B")
  }

  if(!input.weight){
    error.weight = "se requiere un valor"
    console.log("error 2A")
  }else if(!/^\d{1,14}$/.test(input.weight)){
    error.weight = "Solo se permiten numeros"
    console.log("error 2B")
  }

  if(!input.height){
    error.height = "se requiere valor"
    console.log("error 3A")
  }else if(!/^\d{1,14}$/.test(input.height)){
    error.height = "Solo se permiten numeros"
    console.log("error 3B")
  }


  if(!input.hp){
    error.hp = "se requiere valor"
    console.log("error 4A")
  }else if(!/^\d{1,14}$/.test(input.hp)){
    error.hp = "Solo se permiten numeros"
    console.log("error 4B")
  }

  
  if(!input.attack){
    error.attack = "se requiere valor"
    console.log("error 5A")
  }else if(!/^\d{1,14}$/.test(input.attack)){
    error.attack = "Solo se permiten numeros"
    console.log("error 5B")
  }


  if(!input.defense){
    error.defense = "se requiere valor"
    console.log("error 6A")
  }else if(!/^\d{1,14}$/.test(input.defense)){
    error.defense = "Solo se permiten numeros"
    console.log("error 6B")
  }


  if(!input.speed){
    error.speed = "se requiere valor"
    console.log("error 7A")
  }else if(!/^\d{1,14}$/.test(input.speed)){
    error.speed = "Solo se permiten numeros"
    console.log("error 7B")
  }

  if(input.tipo.length===0){

    error.tipo =("necesita almenpos 1 tipo")

    console.log("error 8A")}

  console.log("---------------------------------")
  if(Object.entries(error).length === 0){
    console.log("todos los campos rellando correctamente")
  }else
  {
    console.log("rellene los campos correctamente")
  }
  return error
}


function FormCreate (){

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(traerTipos())
    },[dispatch])

  const tipo = useSelector((state)=>state.types)

  const [input , setinput]= useState({
  name:"",
  weight:"",
  height:"",
  hp:"",
  attack:"",
  defense:"",
  speed:"",
  tipo:[]

  })
  const[error, setError]= useState({})
 
  function handleChange(e){
    setinput({
      ...input,
      [e.target.name]: e.target.value
    })

    setError(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
 
  }

  function handleCheck(e){

    if (e.target.checked) {
      setinput({
        ...input,
        tipo:[...input.tipo,e.target.value]
      })
    } else {
      input.tipo.splice(input.tipo.indexOf(e.target.value), 1)

    }

   
    if (e.target.checked) {
      setError(
        validate(
        {  ...input,
          tipo:[...input.tipo,e.target.value]}))
    }else{
      input.tipo.splice(input.tipo.indexOf(e.target.value), 1)

    }
   


    
  }

  
  function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    
    dispatch(crearPokemon(input))
    setinput({
      name:"",
      weight:"",
      height:"",
      hp:"",
      attack:"",
      defense:"",
      speed:"",
      tipo:[]
    })
  }



  return (
    <div>
       <Navbar/>

       <div className="form-Container">
          <form className="formulario" onSubmit={(e)=>handleSubmit(e)}>
              <div className="formulario-container-name">
                <label className="formulario-label" for="name"> Nombre </label>
                  <div className="input-container">
                    <input type="text " className="formulario-input" value={input.name} onChange={(e)=>handleChange(e)} name="name" placeholder="Pikacho"/>
                  </div>
                  <div> 
                  { error.name && <p className="formulario-input-error"> {error.name} </p>}
                  </div>
                
             
              </div>

              <div className="formulario-container">
                <label className="formulario-label" for="weight"> Peso </label>
                  <div className="input-container">
                    <input type="text" className="formulario-input" value={input.weight}  onChange={(e)=>handleChange(e)} name="weight"placeholder="Peso"/>
                  </div>
                  {  error.weight && <p className="formulario-input-error">{error.weight}</p>}
             
              </div>

              <div className="formulario-container">
                <label className="formulario-label" for="height"> Altura </label>
                  <div className="input-container">
                    <input type="text " className="formulario-input" value={input.height} onChange={(e)=>handleChange(e)} name="height" id="height" placeholder="Alture"/>
                  </div>
                  {  error.height && <p className="formulario-input-error">{error.height}</p>}
             
              </div>

              <div className="formulario-container">
                <label className="formulario-label" for="hp"> Vida </label>
                  <div className="input-container">
                    <input type="text " className="formulario-input" value={input.hp}  onChange={(e)=>handleChange(e)} name="hp" id="hp" placeholder="vida"/>
                  </div>
                  {  error.hp && <p className="formulario-input-error">{error.hp}</p>}
             
              </div>

              <div className="formulario-container">
                <label className="formulario-label" for="attack"> Ataque </label>
                  <div className="input-container">
                    <input type="text " className="formulario-input" value={input.attack} onChange={(e)=>handleChange(e)} name="attack" id="attack" placeholder="ataque"/>
                  </div>
                  { error.attack && <p className="formulario-input-error">{error.attack}</p>}
             
              </div>

              <div className="formulario-container">
                <label className="formulario-label" for="defense"> Defense </label>
                  <div className="input-container">
                    <input type="text " className="formulario-input" value={input.defense } onChange={(e)=>handleChange(e)} name="defense" id="defense" placeholder="Defensa"/>
                  </div>
                  {  error.defense && <p className="formulario-input-error">{error.defense}</p>}
             
              </div>

              <div className="formulario-container">
                <label className="formulario-label" for="speed"> Velocidad </label>
                  <div className="input-container">
                    <input type="text " className="formulario-input" value={input.speed} onChange={(e)=>handleChange(e)} name="speed" id="speed" placeholder="Velocidad"/>
                  </div>
                  {  error.speed && <p className="formulario-input-error">{error.speed}</p>}
             
              </div>
                <div className="msg-error"> <b> Por favor complete el formulario correctamente</b> </div>
        

              <div className="Chebox-form" >
              <label className="formulario-label-tipo" for=""> Tipos </label>
        {tipo.map((el, index) => {
          return (
            <div key={index}> <label >
                    <input type="checkbox" value={el.name} onChange={(e)=>handleCheck(e)}/>
                    <span className="list">{el.name}</span>
                  </label>
              </div>
          );
        })}
          {  error.speed && <p className="formulario-input-error">{error.tipo}</p>}
        </div>

        <div className="btn__enviar" >
            <button type="submit" className="btn">enviar</button>
            <p>Pokemon Creado Correctamente</p>
           </div>
          


              
          </form>

       </div>




       
    </div>
  )
}

export default FormCreate