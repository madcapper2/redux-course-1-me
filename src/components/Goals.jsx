import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { List } from './List';
import { handleAddGoal, handleRemoveGoal } from '../actions';

export function Goals() {
    const goals = useSelector((state) => state.goals);
    const loading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    const ref = React.useRef(null);
    const addItem = (e) => {
        e.preventDefault();
        dispatch(handleAddGoal(ref.current.value, () => ref.current.value = ''));
    }
    const removeGoal = (goal) => dispatch(handleRemoveGoal(goal));

    return (
        <div>
            <h1>Goals </h1>
            <input type='text' ref={ref} placeholder="Add goal" />
            <button onClick={addItem}>Add goal</button>
            <List items={goals} remove={removeGoal} loading={loading}/>
        </div>
    )
}