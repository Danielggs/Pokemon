import React from 'react';
import {useState } from 'react';
import {useDispatch} from 'react-redux';
import {filterPokeByType} from '../redux/actions'

import './Filter.css'

const Filter2 = ({list}) => {
      const dispatch = useDispatch()
  const [checked, setChecked] = useState([]);

const handleCheck = (event) => {
  var updatedList = [...checked];
  if (event.target.checked) {
    updatedList = [...checked, event.target.value];
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }
  setChecked(updatedList);
};

dispatch(filterPokeByType(checked))



  return (
   
      <div className="Filter-container">

        <div className="Chebox-containter" >
      

        {list.map((el, index) => {

          return (
            <div key={index}> <label >
                    <input type="checkbox" onClick={handleCheck} value={el.name} />
                    <span className="list">{el.name}</span>
                  </label>
              </div>
          );
        })}
  
        </div>
        <div className="Select-container">
             <select>
              <option value='abc'>alfabeticamente</option>
        </select>
            <select >
            <option value='todos'>todos los Pokemion</option>
            <option value='creados'>Agregados recientemente</option>
            <option value='api'>todos los API</option>
        </select>
       </div>
           
    </div>
  )
}

export default Filter2