import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect }  from 'react'
import {deleteFavorite, addFavorite} from '../redux/actions'


const Boton = styled.button`
     background:#c00;
     color: white;
     border: 0px;
     position: relative;
     right: -120px;
     top: 10px;
     width:27px;
     heigth: 27px;
     border-radius: 5px;
     font-weigth:bold;
     font-size:15px;
     margin-right: 10px;


   &:hover {
      color: black;
    }
`

const Cartas= styled.div`
     display: inline-block;
     justify-content: space-between;
     background-color: rgba(255,255,255, 0.5);
     border-radius: 15px;
     color: white;
     overflow: hidden;
     margin: 25px 20px 25px 0px;
     
`
const NombreGenero= styled.div`
   display: flex;
   justify-content: space-evenly;
   

`
const Nombre=styled.h2`
position:relative;
top:320px;
background-color: rgba(0,0,0, 0.5);
color: white;
padding:5px;
`
const ElementosNomYGen= styled.h2`
    color:white;
    
`
    


function Card (props){

   const myFavorites = useSelector(state=>state.myFavorites)
   const dispatch= useDispatch()
   const [isFav, setIsFav] = useState(false)
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(deleteFavorite(props.id))
      }else{
         setIsFav(true)
         dispatch(addFavorite(props))
      }
   } 

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <Cartas>
         {isFav ? 
         ( <button onClick={handleFavorite}>❤️</button>) : 
         (<button onClick={handleFavorite}>🤍</button>)
         }
         <Boton onClick={props.onClose}>X</Boton>
         <Link to={`/detail/${props.id}`}>
            <Nombre>{props.name}</Nombre>
         </Link>
         <img  src={props.image} alt="Imagen del personaje" />
         <NombreGenero>
            <ElementosNomYGen>{props.species}</ElementosNomYGen>
            <ElementosNomYGen>{props.gender}</ElementosNomYGen>

         </NombreGenero>
      </Cartas>
   );
}


 

export default Card
