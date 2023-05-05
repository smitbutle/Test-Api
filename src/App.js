import React from "react";
import {
    BrowserRouter as Router,
    
    useRoutes,
} from "react-router-dom";
import SignUp from './signup';
import Table from './table';

const App = () => {
    let routes = useRoutes([
        { path: "/", element: <SignUp /> },
        { path: "/show", element: <Table /> },
        // ...
    ]);
    return routes;
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
