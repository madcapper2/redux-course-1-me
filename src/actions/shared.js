import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';

function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    };
}

export function fetchAndHandleData() {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ])
        .then(([initialTodos, initialGoals]) => dispatch(receiveData(initialTodos, initialGoals)))
        .catch(() => alert('An error occurred retrieving data.'));
    }
}