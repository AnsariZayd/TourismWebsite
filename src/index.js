import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './i18n';

import { store } from './Redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Loading from './Components/Loader/Loading';

let persistor = persistStore(store) ;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading/>}>
  <React.StrictMode>
   <Provider store={store}>
    <PersistGate persistor={persistor}> 
    <App />
    </PersistGate> 
    </Provider>
  </React.StrictMode>
  </Suspense>
);

reportWebVitals();
