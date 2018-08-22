import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actions';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData
};

const countriesReducer = function(state=initialState, action) {
    switch(action.type){
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});
        
        case GET_COUNTRY:
            return;
        
        default:
            return state;
    }
}

export default countriesReducer;