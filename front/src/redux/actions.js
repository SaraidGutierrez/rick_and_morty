import { ADD_FAVORITE, GET_FAVORITES, FILTER, ORDER, RESET } from './action-types'
import axios from 'axios'

export const addFavorite = (character) => {
    
    return async  function( dispatch){ 
        try {
            const response = await axios.post('http://localhost:3001/rickandmorty/create', character)
            dispatch({
                type: ADD_FAVORITE, 
                payload: response.data 
            })

            } catch (error) {
                  return {error: error}
              }
    
    }
}

export const getAllFavorites = () => {
    return async function (dispatch) {
        try {
            const response = await  axios.get('http://localhost:3001/rickandmorty/get')
        
            return dispatch({
                type: GET_FAVORITES,
                payload: response.data
            })
        } catch (error) {
            return {error:error}
        }
    }
}

export const deleteFavorite = (id) => {
    return async function (dispatch){
        try {
            const response = await axios.delete(`http://localhost:3001/rickandmorty/delete/${id}`)
        } catch (error) {
            return {error: error}
        }
        

    }
    
}

export const filterCards = (gender) => {
    //console.log(gender , ' line 50')
    return{
        type: FILTER, 
        payload: gender
    }
}

export const orderCards = (id) => {
    return{
        type: ORDER, 
        payload: id
    }
}


