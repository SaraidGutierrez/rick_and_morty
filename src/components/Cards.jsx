import Card from '../components/Card.jsx'
import styled from 'styled-components'

const Cartas = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

`

export default function Cards(props) {
   
   
   const { characters } = props;
   
   return (
            <Cartas>
               {
                  characters.map(({name,species,gender,image,id})=>{
                     return (
                        <Card
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        onClose={()=>props.onClose(id)}
                        key={id}
                     />)
                  })
               }
            </Cartas>
   )
}