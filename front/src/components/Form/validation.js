 const validation = (userData) =>{
     let errors = {};

     if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username= 'Correo invalido'
     }
     if(!userData.username){
        errors.username='Este campo no puede estar vacio'
     }
     if(userData.username.length>35){
        errors.username = 'El email no puede exceder los 35 caracteres'
     }
     if(!/^(?=.*\d)[a-zA-Z\d]{6,10}$/.test(userData.password)){
        errors.password='La contraseña debe contener al menos un numero y tener una longitud de entre 6 y 10 caracteres'
     }
     return errors
}

export default validation;