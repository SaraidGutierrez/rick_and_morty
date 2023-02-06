import { Link } from 'react-router-dom'
import { useState } from 'react';



const Form = () =>{


    const [error, setError] = useState(
        {});
    const [userData, setUserData] = useState(
        { username: '', password: '' });
    
        const validation = ()=>{
            const regEx1= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            const regEx= /^(?=.*\d).{8,}$/
            
            if(!regEx.test(userData.password) && !regEx1.test(userData.username)){
                setError({password:'Password is not valid', username: 'Username is not valid'});
                console.log(error,'linea 21')
            }
            if(!regEx1.test(userData.username)){
                setError({username:'Correo invalido'})
            }
            if(!regEx1.test(userData.password)){
                setError({...error, password:'Contraseña invalida'})
            }
            
          };
  
        //const passwordValidation = ()=>{
            //minumo 8 y un numero
            // Saraid234
        
    const handleSubmit = (e)=>{
        e.preventDefault();
        validation();

    };

    const handleOnChange = (e) =>{
        console.log(userData)
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
            
        })
    }
    
    return (
        <form>
            <label>Username</label>
            <input 
                type='text'
                onChange={handleOnChange}
                name='username'
            />
            <p>{error.username}</p>
            <label>Password</label>
            <input 
                type='text'
                onChange={handleOnChange}
                name='password'
            />
            <p>{error.password}</p>
            <button onClick={handleSubmit}>Check</button>
            
        </form>
    )
 }

 export default Form;