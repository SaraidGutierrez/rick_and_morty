import SearchBar from './SearchBar/SearchBar.jsx'
import { Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'


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
       
     
            <div>
                <img  src="https://www.themoviedb.org/t/p/original/kCyZc7mvqHdeUGpguSGxsWPxqpI.png" 
                width='500px'
                />
                <Link to='home'>Home</Link>
                <Link to='about'>About</Link>
                <SearchBar onSearch={props.onSearch}/>
            
          
        </div>
          }
        </div>
    )
}