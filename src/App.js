import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from 'react-hot-toast';

import './assets/styles/App.css';


const App = () => {
    return (
        <BrowserRouter>
            <Toaster position="top-right" reverseOrder={false} />
            <AppRoutes />
        </BrowserRouter>
    );
}


export default App;
