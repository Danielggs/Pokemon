

const initialState={
    pokemon:[],
    pokemonDetail:[] ,
    copiaPokemon:[],
    types:[]

}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case "GET_POKEMON":
            return{
                ...state,
                pokemon: action.payload,
                copiaPokemon: action.payload
            }
        case "GET_TYPE":
            return{
                ...state,
                types: action.payload
            }
        case "FILTER_BY_TYPE":
              var tipos= action.payload;
              var  allPoke= state.copiaPokemon
                var pokeFilter=[];
                if(tipos.length!==0){
                    for(let i=0 ; i< tipos.length;i++){
                    
                        if(i===0){
                             pokeFilter  = allPoke.filter(el=> el.tipo.includes(tipos[i]))
                             allPoke=pokeFilter
                           
                        }else{
                            pokeFilter  = allPoke.filter(el=> el.tipo.includes(tipos[i]))  
                        }  
                   }

                }else{
                     pokeFilter= allPoke 

                }
          
            return{
                ...state,
                pokemon:pokeFilter
                
            }
        case "FILTER_CREATE":
            var  allPokes= state.copiaPokemon
            const createFilter = action.payload === "creados" ? allPokes.filter(el=> el.create) :  allPokes.filter(el=> !el.create)
            return{
                ...state,
                pokemon: action.payload === "todos" ? state.copiaPokemon :createFilter
            }
        case "ORDER_BY_NAME":
            const sort = action.payload === 'up'?
            state.pokemon.sort(function(a, b){
                if(a.name > b.name){
                    return 1;
                }
                if(b.name > a.name){
                    return -1;
                }return 0;              
            }) :  state.pokemon.sort(function(a, b){
                if(a.name > b.name){
                    return -1;
                }
                if(b.name > a.name){
                    return 1;
                }return 0;  
            })
          
        return{
           ...state,
           pokemon: sort

            }
        case "GET_NAME":
            console.log(action.payload)
            return{
                ...state,
                pokemon:action.payload
            }
        case "POST_POKE":
            return{
                ...state
            }
        case "POKE_BY_ID":
            return{
                ...state,
                pokemonDetail: action.payload,
            }    
        case "CLEAR_CARD":
           return{
            ...state,
            pokemonDetail: [],
           }
        default:
           return state
    }
}

export default rootReducer;