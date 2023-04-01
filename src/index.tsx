import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './components/app/App';
import './pages/index';
import { Provider } from 'react-redux';
import store from './services';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store()} >
      <App />
    </Provider>
  </React.StrictMode>
);