import axios from 'axios'

export function traerPokemon(){
    return async(dispatch)=>{
        let poke = await axios("http://localhost:3001/pokemon")

      
      return  dispatch({
            type:"GET_POKEMON",
            payload: poke.data})
    }

}
export function filterPokeByType(payload){
    return{
        type:"FILTER_BY_TYPE",
        payload
    }

}


export function traerTipos(){
    return async(dispatch)=>{
        let type = await axios("http://localhost:3001/types")

      return  dispatch({
            type:"GET_TYPE",
            payload: type.data})
    }

}

export function filterCreate(payload){

    return{
        type:"FILTER_CREATE",
        payload
    }
}

export function orderName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function getNamePoke(payload){
    return async(dispatch)=>{
        try {
            let name= await axios(`http://localhost:3001/pokemon?name=${payload}`)
        return dispatch({
            type:"GET_NAME",
            payload:name.data
        })
        } catch (error) {
            console.log(error)
        }
    }

}

export function crearPokemon(payload){
    return async()=>{
      const response = await axios.post("http://localhost:3001/pokemon",payload)
      console.log(response)
      return response
    }
}

export function PokeById(payload){
    return async(dispatch)=>{
        let pokeid = await axios(`http://localhost:3001/pokemon/`+ payload)
        console.log(pokeid.data)
        return dispatch({
            type:"POKE_BY_ID",
            payload:pokeid.data
        })
    }
}

export function clearCard(){
    return async(dispatch)=>{

        return dispatch({
            type:"CLEAR_CARD",       
        })
    }
}