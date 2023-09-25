import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ErrorPage from "./pages/errorpage";
import LoginPage from "./pages/loginpage";
import Dashboardpage from "./pages/dashboardpage";
import Createpage from "./pages/crud/createpage";
import EditPage from "./pages/crud/editpage";
import { GlobalProvider } from "./context/GlobalContext";
import ImageInfoPage from "./pages/imageinfopage";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="dashboard" element={<Dashboardpage />} />
          <Route path="/image/:id" element={<ImageInfoPage />} />
          <Route path="/create" element={<Createpage />} />
          <Route path="/edit/:IdData" element={<EditPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;
