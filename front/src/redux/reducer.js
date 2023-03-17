import { ADD_FAVORITE, GET_FAVORITES, FILTER, ORDER, RESET  } from './action-types'


const initialState = {
    myFavorites: [],
    allCharacters: [],
    favoritesFilter: []

}


const favoritesReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: action.payload,
            }
        case GET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                favoritesFilter: action.payload
            }
        case FILTER:
            //state.favoritesFilter = myFavorites
            return{
                ...state,
                favoritesFilter: state.myFavorites.filter(character => character.gender === action.payload)
            }   
        
        case ORDER:
            let orderFav;
            if(action.payload==='Ascendente'){
                orderFav = state.myFavorites.sort((a,b)=>
                    a.id > b.id ? 1 : -1
                )
            }else{
                orderFav = state.myFavorites.sort((a,b)=>
                    a.id < b.id ? 1 : -1
                )

            }
            
            return{
                ...state,
                myFavorites:[...orderFav],
            }

        case RESET:
            return{
                ...state,
                myFavorites: [...state.allCharacters]
            }
            default:
            return {...state}
    }


}

export default favoritesReducer;