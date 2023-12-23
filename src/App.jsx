import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Departments,
  Dashboard,
  Appointments,
  Help,
  Patients,
  Payments,
  Products,
  Reports,
  Settings,
  // Login
} from "./pages";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";


const App = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    setIsOnline(true)
  }, []);

  return (
    <>
      {!isOnline && (
        <div className="bg-red-500 text-white text-xs text-center p-1 w-full">
          You are currently offline... please check your internet connection....
        </div>
      )}
      <Router>
        <Routes>

          {/* <Route path="/">
            <Route index element={<Login />} />
          </Route> */}


          <Route path="/overview" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>


          <Route path="patients" element={<Layout />}>
            <Route index element={<Patients />} />
          </Route>

          <Route path="appointments" element={<Layout />}>
            <Route index element={<Appointments />} />
          </Route>

          <Route path="reports" element={<Layout />}>
            <Route index element={<Reports />} />
          </Route>

          <Route path="departments" element={<Layout />}>
            <Route index element={<Departments />} />
          </Route>

          <Route path="payments" element={<Layout />}>
            <Route index element={<Payments />} />
          </Route>

          <Route path="product-stock" element={<Layout />}>
            <Route index element={<Products />} />
          </Route>

          <Route path="help-center" element={<Layout />}>
            <Route index element={<Help />} />
          </Route>

          <Route path="settings" element={<Layout />}>
            <Route index element={<Settings />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;

