import axios from 'axios'

export function traerPokemon(){
    return async(dispatch)=>{
        let poke = await axios("http://localhost:3001/pokemon?name=")

      
      return  dispatch({
            type:"GET_POKEMON",
            payload: poke.data})
    }

}


export const crearPokemon= ()=>{
    return async(dispatch)=>{
    }
}