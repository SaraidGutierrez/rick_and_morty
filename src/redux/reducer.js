import { ADD_FAVORITE, DELETE_FAVORITE } from './action-types'


const initialState = {
    myFavorites: []
}


const favoritesReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
            let arrayFiltrado = state.myFavorites.filter(character => character.id !== action.payload)
            return{
                ...state,
                myFavorites:[...state.myFavorites, arrayFiltrado]
            }
        default:
            return {...state}
    }


}

export default favoritesReducer;