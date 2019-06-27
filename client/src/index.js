import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App.js';
import Root from 'Root';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path='/' component={App} />
        </BrowserRouter>
    </Root>, 
    document.querySelector('#root')
);

function getPhys(e) {
    if(e.target.classList.contains('physician')) {
        window.phys = e.target.innerHTML.split(',')[0];
    }
}

window.addEventListener('click', getPhys);