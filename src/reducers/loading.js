import { RECEIVE_DATA } from "../actions";

export const loading = (state = true, action) => {
    switch(action.type) {
        case RECEIVE_DATA:
            return false;
        default: 
            return state;
    }
}