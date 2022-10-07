import axios from 'axios'

export function traerPokemon(){
    return async(dispatch)=>{
        let poke = await axios("http://localhost:3001/pokemon?name=")

      
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





export const crearPokemon= (payload)=>{
    return{
        type: "FILTER_CREATE",
        payload
    }
}