import * as actionTypes from '../constants/constants'
import { initialState } from './initialState';

export const mainReducer = (state = initialState(), action) => {
    switch (action.type) {

        case actionTypes.GET_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            }
            )

        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                quiz: action.data,
            }
            )

        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
            })
        
        case actionTypes.SUBMIT_DATA:
            return Object.assign({}, state, {
                isFetching: true
            })

        case actionTypes.SUBMIT_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isModalOpen: true
            }
            )
        
        case actionTypes.SUBMIT_DATA_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                errorMessage: action.message,
                isModalOpen: true
            })
            
        case actionTypes.CLOSE_MODAL:
            return Object.assign({}, state, {
                isModalOpen: false
            })

        default:
            return state;
    }
}
