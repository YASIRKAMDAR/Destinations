import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import LoginForm from './LoginForm';
import Results from './Results';
import Pagehead from './Pagehead';
import HoldMyFare from './HoldMyFare';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <div className="container bodySection">
                    <Pagehead />
                    <Route  path="/" component={Results} />
                </div>
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;