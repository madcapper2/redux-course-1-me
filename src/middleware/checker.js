import { ADD_GOAL, ADD_TODO } from '../actions';

export const checker = (store) => (next) => (action) => {
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().includes('bitcoin')) {
        return alert('Nope, that is a bad idea');
    }
    if (action.type === ADD_GOAL && action.goal.name.toLowerCase().includes('bitcoin')) {
        return alert('Nope, that is a bad idea');
    }

    return next(action);
}