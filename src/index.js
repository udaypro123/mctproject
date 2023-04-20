import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {store} from './Componets/reduxx/store'
import ContextProvider from './Componets/contextApi/context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ContextProvider>
  <Provider store={store}>
    <App />
  </Provider>
</ContextProvider>

);


