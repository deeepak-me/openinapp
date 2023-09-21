import React, { useContext, useEffect } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { AppContext } from "./context/appContext";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? children : <Navigate to="/openinapp/login" />;
};

const App = () => {
  return (
    <div id="app" className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/openinapp/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path="/openinapp/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
