import styled from 'styled-components'
import { useState  } from 'react';
const Boton=styled.button`
      background-color: #e6eeff;
      color: black;
      border-radius: 5px;
      padding: 10px;
      font-weight: bold;

      &:hover {
         color: #4498ff;
       }
`
const Busqueda= styled.input`
       padding: 10px;
       margin-right: 10px;
       border-radius: 5px;
`

export default function SearchBar(props) {
   const [id, setID]=useState("")
   const handleChange= e=>{
      setID(e.target.value)
   }
   return (
      <div>
         <Busqueda  type='search' name='search' id='' onChange={handleChange}/>
         <Boton onClick={()=>props.onSearch(id)}>Agregar</Boton>
      </div>
   );
}
