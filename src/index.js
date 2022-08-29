import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider  } from '@mui/material';
import { store } from "./toolkit/store"
import { Provider } from "react-redux"
import {  StorageKey } from './lib/storage';
import { loadChats } from './toolkit/chatsSlicer';

window.addEventListener('storage', (e) => {
  if (e.key !== StorageKey){
    return
  }

  const chats = JSON.parse(e.newValue)
  if (!Array.isArray(chats)){
    return
  }
  store.dispatch(loadChats())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>
);
