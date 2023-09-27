import * as React from 'react';

export function List({items = [], remove, toggle, loading}) {
           
    if (loading) {
        return <h3> ...Loading data </h3>
    }

    return (
        <ul>
            {items.map(item => {
                return (
                    <li key={item.id}>
                        <span 
                        style={{textDecoration: item.complete ? 'line-through' : 'none'}}
                        onClick={() => toggle && toggle(item)}>
                            {item.name}
                        </span>
                        <button onClick={() => remove(item)}>X</button>
                    </li>
                );
            })}
        </ul>
    )
}