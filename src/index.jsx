import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './components/app/App';
import './pages/index';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    {/* <Provider store={store()} > */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);