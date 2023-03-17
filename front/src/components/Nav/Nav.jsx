import SearchBar from './SearchBar/SearchBar.jsx'
import { Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import AboutUs from './img/info.png'
import logOut from './img/salir.png'
import home from './img/homeblanco.jpeg'
import heart from './img/heart.png'

const NavBar = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-evenly;
   box-shadow: 0px 6px 8px rgba(6, 17, 16, 0.8),0px 3px 4px rgba(18, 71, 52, 0.8), 0px 1px 16px rgba(18, 71, 52, 0.2);
   border-radius: 50px;
   background: linear-gradient( to right, #701770, blue);
   
   padding: 10px;

`
const Imagen = styled.img`
   width: 300px;
   
`
const Icono = styled.img`
   width: 50px;
   
`

const Enlaces = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  

`


export default function Nav(props){

    let location = useLocation();
    const [login, setLogin] = useState(false)
    useEffect(()=>{
        if(location.pathname==='/login'){
          setLogin(true)
        
        }
      }, [])
    
   
    
    return (
        
       <div>
          {login ? null : 
       
     
            <NavBar>
                <Imagen  src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" 
                         className='img'
                />
                <Enlaces>
                  <Link to='/'className='a' ><Icono src={logOut}/>Logout</Link>
                  
                </Enlaces>

                <Enlaces>
                  <Link to='home'><Icono src={home}/>Home</Link>
                </Enlaces>

                <Enlaces>
                  <Link to='about'><Icono src={AboutUs}/>About</Link>
                </Enlaces>

                <Enlaces>
                  <Link to='favorites'><Icono src={heart}/>Favorites</Link>
                </Enlaces>

                <Enlaces>
                <SearchBar onSearch={props.onSearch} random={props.random}/>
                </Enlaces>
            
          
        </NavBar>
          }
        </div>
    )
}