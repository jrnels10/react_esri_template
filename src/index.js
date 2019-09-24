import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from './Context';
// import MapContainer from './components/Map/MapContainer';
import Map from './components/Map/Map'


import * as serviceWorker from './serviceWorker';
import App from './App';


ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={Map} />
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();