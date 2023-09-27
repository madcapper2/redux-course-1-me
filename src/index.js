import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import { App } from './components/App';
import {todos, goals, loading} from './reducers';
import { checker, logger } from './middleware';


const store = configureStore({
  reducer: {
    todos,
    goals,
    loading
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checker, logger)
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store} > 
    <App /> 
    </Provider>
);