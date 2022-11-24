import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Register from "./register/components/Register";
import Auth from "./authenticationDesign/components/Auth";
import Preloader from "./Design/components/Preloader";
import ForgetPass from "./forgetpassword/components/Forgetpass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Auth />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Routes>
        <Route path="/forget-password" element={<ForgetPass />} />
      </Routes>
    </Router>
  );
}

export default App;
