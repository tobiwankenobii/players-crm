import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
    return (
        <BrowserRouter>
            {routes.map((route) => (
                <Route key={route.path} path={route.path} exact={route.exact}>
                    <route.navbar />
                    <route.main />
                </Route>
            ))}
        </BrowserRouter>
    );
};

export default App;
