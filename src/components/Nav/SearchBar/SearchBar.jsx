import styled from 'styled-components'
import { useState  } from 'react';
const Boton=styled.button`
      background-color: #701770;
      color: #FFf;
      border-radius: 30px;
      padding: 10px;
      font-weight: bold;
      border:none;

      &:hover {
         color: #4498ff;
       }
`
const Busqueda= styled.input`
       padding: 10px;
       margin-right: 10px;
       border-radius: 30px;
       border:none;
       
`

export default function SearchBar(props) {
   const [id, setID]=useState("")
   const handleChange= e=>{
      setID(e.target.value)
   }
   return (
      <div>
         <Busqueda  placeholder='Ingresa un número' type='search' name='search' id='' onChange={handleChange}/>
         <Boton onClick={()=>props.onSearch(id)}>Agregar</Boton>
      </div>
   );
}
