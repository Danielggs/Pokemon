import React from 'react'
import './Filter.css'

const Filter = (filterList) => {

  

  return (
   
      <div className="Filter-container">

  
        <div className="Chebox-containter" >
          <div> <label ><input type="checkbox" /><span className="list">normal</span></label></div>
          <div> <label><input type="checkbox" /><span className="list">fighting</span></label></div>
          <div>  <label><input type="checkbox" /><span className="list">flying</span></label></div>
          <div>  <label ><input type="checkbox"  /><span className="list">poison</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">ground</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">rock</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">bug</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">ghost</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">steel</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">fire</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">water</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">grass</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">electric</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">psychic</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">ice</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">dragon</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">dark</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">fairy</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">unknown</span></label></div>
          <div>  <label ><input type="checkbox" /><span className="list">shadow</span></label></div>

  
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

export default Filter