
import { useState } from 'react';
import validation from './validation';
import styled from 'styled-components'

const Forma = styled.form`
    
    display: grid;
    width: 30%;
    margin: 50px auto;
    padding: 10px;
    margin-top: 50px;
    border-radius: 5px;
    padding-top:30px;
    padding-bottom: 20px;

`

const Etiqueta = styled.label`
margin-right:auto;
padding-left:20px;
margin-top:30px;
margin-bottom: 10px;
font-family:Verdana, Tahoma, sans-serif;
font-size: large;
font-weight: bold;
color: white;
text-shadow: 10px 0 10px #0f0316b4;

`
const Entrada = styled.input`
padding: 10px 10px 10px 10px;
border-radius: 30px;
border: 2px solid #270a58;
`
const Boton = styled.button`
margin-top: 60px;
padding:10px 10px 10px 10px ;
border-radius: 30px;
background-color: #5d00ff;
color: #FFF;
font-size: large;
font-weight: bolder;
border: 2px solid #270a58;
`

const Error = styled.p`
    color: #FFF;
    font-weight:700;
    margin-right:auto;

`

const Form = ({login}) =>{


    const [errors, setErrors] = useState({
        username: '', password: '' 
    });
    const [userData, setUserData] = useState(
        { username: '', password: '' 
    });
    
    const handleSubmit = ((event)=>{
            event.preventDefault()
            login(userData)
    })
      
        
    

    const handleOnChange = (e) =>{
       
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
            
        })
        setErrors(validation({
            ...userData,
            [e.target.name]:e.target.value
        }))
    }
   
    return (
        <Forma onSubmit={handleSubmit}>
            <Etiqueta>Username</Etiqueta>
            <Entrada 
                type='text'
                onChange={handleOnChange}
                name='username'
                value={userData.username}
            />
            {errors.username && <Error>{errors.username}</Error>}
            <Etiqueta>Password</Etiqueta>
            <Entrada 
                type='password'
                onChange={handleOnChange}
                name='password'
                value={userData.password}
            />
            {errors.password &&<Error>{errors.password}</Error>}
            <Boton >Login</Boton>
            
        </Forma>
    )
 }

 export default Form;