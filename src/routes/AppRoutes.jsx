// Manages application routing.

import { Routes, Route } from "react-router-dom";


import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Login from '../pages/Login/login';
import Signup from '../pages/Signup/sign_up';
import Dashboard from '../pages/Dashboard/Dashboard';
import MyComponent from '../pages/Map/map';
import FormikComponent from '../pages/Form/formik';
import Counter from '../features/counter/Counter';

function AppRoutes() {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/counter" element={<Counter />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<MyComponent />} />
          <Route path="/formik" element={<FormikComponent />} />
        </Route>
      </Routes>
  );
}
export default AppRoutes;
