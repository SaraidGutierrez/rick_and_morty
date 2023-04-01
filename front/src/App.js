import './App.css'
import Nav from './components/Nav/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation} from 'react-router-dom'
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites.jsx'
import { deleteFavorite } from './redux/actions';
import { useDispatch } from 'react-redux';






function App () {
 const location = useLocation()
 const [characters, setCharacters]= useState([]);
 const [access, setAccess] = useState(false)
 const navigate = useNavigate()
 const dispatch = useDispatch()

 const username= 'saraid@gutierrez.com'
 const password='Saraid23'

 const login = (userData) =>{
 
      if(userData.username===username && userData.password===password){
        
        setAccess(true)
        navigate('/home')
      }
 }

    useEffect(() => {
      !access && navigate('/');
    }, [access]);
 
 const onSearch=(characterID)=>{
  
  //fetch(`http://localhost:3001/rickandmorty/onsearch/${characterID}`)
  fetch(`http://localhost:3001/onsearch/${characterID}`)
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
  console.log(ID, 'onclose line 64 APP')
  const charFiltrado = characters.filter(e => e.id !== ID)
  console.log(charFiltrado, 'charfiltrado linea 66 APP')
  setCharacters(charFiltrado)
  dispatch(deleteFavorite(ID))
}

function random(){
  let randomId = Math.floor(Math.random()*826);
 
  onSearch(randomId)
}


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} random={random}/>}
      
      
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
        <Route path= '/favorites' element={<Favorites/>} />
       
      </Routes>
    </div>
  )
}

export default App
