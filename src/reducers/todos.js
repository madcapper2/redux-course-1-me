import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, RECEIVE_DATA} from '../actions';

export default function todos (state = [], action) {
    switch (action.type) {
        case ADD_TODO: 
            return [
                ...state,
                action.todo
            ];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    };
                }

                return todo;
            });
        case RECEIVE_DATA:
            return action.todos;
        default:
            return state;
    }
}