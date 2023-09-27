import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { List } from './List';
import { handleAddTodo, handleDeleteTodo, handleToggleTodo} from '../actions';

export function Todos() {
    const todos = useSelector((state) => state.todos);  
    const loading = useSelector((state) => state.loading);  
    const dispatch = useDispatch();
    const ref = React.useRef(null);
    const addItem = (e) => {
        e.preventDefault();
        dispatch(handleAddTodo(ref.current.value, () => ref.current.value = ''));
    }

    const removeTodo = (todo) => dispatch(handleDeleteTodo(todo));
    const toggleTodo = (todo) => dispatch(handleToggleTodo(todo));

    return (
        <div>
            <h1>Todo List </h1>
            <input type='text' ref={ref} placeholder="Add todo" />
            <button onClick={addItem}>Add todo</button>
            <List items={todos} remove={removeTodo} toggle={toggleTodo} loading={loading}/>
        </div>
    )
}