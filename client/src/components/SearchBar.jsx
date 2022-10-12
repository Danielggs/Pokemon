import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getNamePoke} from '../redux/actions'



const SearchBar = () => {

    const dispatch = useDispatch();
    const [name , setName] = useState("")

    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNamePoke(name))
    }


  return (
      <div>
            <input type="text"
                   placeholder='Buscar'
                   onChange={(e)=>{handleInput(e)}}
            />
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Buscar</button>
   
   
      </div>
  );
};

export default SearchBar;

 