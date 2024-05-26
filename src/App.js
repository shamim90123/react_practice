import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/sign_up';
import Dashboard from './components/dashboard';
import MyComponent from './components/map';
import FormikComponent from './components/formik';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/map" element={<MyComponent />} />
                <Route path="/formik" element={<FormikComponent />} />

            </Routes>
        </Router>
    );
}


export default App;
