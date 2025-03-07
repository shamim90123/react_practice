import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";

import './assets/styles/App.css';



const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}


export default App;
