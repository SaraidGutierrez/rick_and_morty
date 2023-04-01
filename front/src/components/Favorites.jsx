import { useSelector, useDispatch } from "react-redux"
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { filterCards, getAllFavorites, orderCards, resetCards} from '../redux/actions'
import { useEffect, useRef } from "react"


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

const Seleccionar = styled.select`
    background-color: #1abc9c;
  color: #fff;
  font-size: inherit;
  padding: .5em;
  padding-right: 2.5em; 
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 30px;
  text-overflow: '';
`

const Boton2=styled.button`
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

const Favorites = () => {
    const dispatch = useDispatch()
    const filter =  useRef(null)
    const order = useRef(null)

    function handleReset(e){
        dispatch(getAllFavorites());
        
    }

    useEffect(() => {
      dispatch(getAllFavorites())
    
    }, [])
    

    const favs = useSelector((state)=> state.favoritesFilter)

    return (
    <div>
        <div>
            <Seleccionar ref= {order} onChange={(e)=>{dispatch(orderCards(e.target.value))}}>
                {['Ascendente', 'Descendente'].map((e,i)=>{return <option value= {e} key={i}>{e}</option>})}
            </Seleccionar>
            <Seleccionar ref = {filter} onChange={(e)=>{dispatch(filterCards(e.target.value))}}>
                {['Male', 'Female', 'unknown', 'Genderless'].map((e,i)=>{return <option value= {e} key={i}>{e}</option>})}
            </Seleccionar>
            <Boton2 value='reset' onClick={handleReset}> Reset</Boton2>
        </div>

        { favs?.map((character) => {
            return (
            <Cartas key={character.id}>
                
                <Link to={`/detail/${character.id}`}>
                <Nombre>{character.name}</Nombre>
                </Link>
                <img  src={character.image} alt="Imagen del personaje" />
                
                
                <NombreGenero>

                    <ElementosNomYGen>{character.species}</ElementosNomYGen>
                    <ElementosNomYGen>{character.gender}</ElementosNomYGen>

                </NombreGenero>
            </Cartas>
            )
        })
        
        }
    </div>
    )
    
}

export default Favorites