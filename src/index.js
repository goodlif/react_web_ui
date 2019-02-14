import React from 'react';
import ReactDOM from 'react-dom'; 
import {HashRouter, Route } from 'react-router-dom'; 
import Root from './Root';
import App from './components/App'; 

ReactDOM.render(
<Root>
    <HashRouter>
        <Route path="/" component={App}></Route>
    </HashRouter>
</Root>, 
document.getElementById('app')
);
