import './App.css'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react';
import { Route, Routes} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';



function App () {

 const [characters, setCharacters]= useState([]);

 
 const onSearch=(characterID)=>{
  fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
  .then(response=>response.json())
  .then(json=>{
    if(json.name){
      if(!Repetido(json.id)){
      setCharacters([...characters,json])
      }else{
        window.alert('Ya tienes este personaje')
      }
    }else{
      window.alert('No se encontró tu personaje')
    }
  });
}


function Repetido(id){
  let auxiliar = false;
  characters.forEach((e)=>{
    if(e.id===id) auxiliar=true
  });
  return auxiliar
}

function onClose(ID){
  console.log(ID, 'onclose line 38')
  const charFiltrado = characters.filter(e => e.id !== ID)
  console.log(charFiltrado, 'charfiltrado')
  setCharacters(charFiltrado)
}
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      
      <Routes>
        <Route 
        path='/home' 
        element={<Cards
          characters={characters}
          onClose={onClose}
          />}
        />
        <Route path= 'about' element={<About/>} />
        <Route path= 'detail/:detailId' element={<Detail/>} />
        <Route path= 'login' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
