import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './assets/styles/App.css';
import Login from './pages/Login/login';
import Signup from './pages/Signup/sign_up';
import Dashboard from './pages/Dashboard/dashboard';
import MyComponent from './pages/Map/map';
import FormikComponent from './pages/Form/formik';
import Counter from './features/counter/Counter';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/map" element={<MyComponent />} />
                <Route path="/formik" element={<FormikComponent />} />
                <Route path="/counter" element={<Counter />} />

            </Routes>
        </Router>
    );
}


export default App;
