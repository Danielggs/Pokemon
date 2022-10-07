

const initialState={
    pokemon:[],
    copiaPokemon:[],
    types:[]

}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_POKEMON":
            return{
                ...state,
                pokemon: action.payload
            };
        case "GET_TYPE":
            return{
                ...state,
                types: action.payload
            }
        case "FILTER_BY_TYPE":
              var tipos= action.payload;
              var  allPoke= state.pokemon
          
                var pokeFilter=[];
          
                if(tipos.length!==0){
                    for(let i=0 ; i< tipos.length;i++){
                        if(i===0){
                             pokeFilter  = allPoke.filter(el=> el.tipo.includes(tipos[i]))
                            state.copiaPokemon = pokeFilter
                        }else{
                            pokeFilter = state.copiaPokemon.filter(el=> el.tipo.includes(tipos[i]))
                            state.copiaPokemon = pokeFilter;
                        }  
                   }

                }else{
                     pokeFilter= allPoke 

                }
              
               console.log( pokeFilter)
          
            return{
                ...state,
               pokemon:pokeFilter


            }

     

       
        default:
           return state
    }
}

export default rootReducer;