import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {traerPokemon, traerTipos,orderName } from '../redux/actions'
import {Link} from 'react-router-dom'
import Card from './Card'
import "./Cards.css"
import Filter2 from './Filter2'
import Pagination from './Pagination';
import SearchBar from './SearchBar'





export default function Cards(){
   
    const dispatch = useDispatch()
    const AllPokemon = useSelector((state)=>state.pokemon)
    const AllType = useSelector((state)=>state.types)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokePorPage] = useState(16);
    const [orden, setOrden] = useState("")
    console.log(AllPokemon)

    useEffect( () => {
      dispatch(traerTipos())
      dispatch(traerPokemon())
      },[dispatch])

 

        const indexOfLastPost = currentPage * pokePorPage;
        const indexOfFirstPost = indexOfLastPost - pokePorPage;
        const listPoke = AllPokemon.slice(indexOfFirstPost, indexOfLastPost);
        const paginate = pageNumber => setCurrentPage(pageNumber);

        const handleChangeSort = (e) =>{
          e.preventDefault();
          dispatch(orderName(e.target.value))
          setCurrentPage(1)
          setOrden(`orden ${e.target.value}`)
        }
        


      
  return (

    <>
      <SearchBar/>
       <Filter2 list={AllType} page={paginate}/>
       <select onChange={e => handleChangeSort(e)}>
              <option value= "up">ascendente</option>
              <option >descendente</option>
        </select>

      <div className="Cards-Container">
          
          {
            listPoke.length >0 ? listPoke.map((el)=>{

             return  <Link className="card" to={`/detail/${el.id}`} key={el.id}>
                       <Card key={el.id} name={el.name} image={el.img} type={el.tipo}/>
                    </Link>
            }): <h2>No se encontro Nada</h2>
            }
        </div>
        <Pagination postsPerPage={pokePorPage} totalPoke={AllPokemon.length}  paginate={paginate}
      />

    
    </>     
      
  )
}



