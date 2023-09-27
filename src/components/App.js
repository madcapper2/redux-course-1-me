import * as React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAndHandleData } from '../actions';
import { Todos } from './Todos';
import { Goals } from './Goals';

export function App () {
  const dispatch = useDispatch();
  React.useEffect(() => {
      dispatch(fetchAndHandleData());
  }, [dispatch]);
  return (
      <div>
          <Todos />
          <Goals />
      </div>
     
  );
}