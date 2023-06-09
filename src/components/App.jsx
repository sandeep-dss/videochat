import React from "react";

import { Routes, Route } from "react-router-dom";

// components
import Header from "./Header";
import Sidebar from "./Sidebar";

// pages
import Home from "../page/Home";
import Room from "../page/Room";
import NotFound from "../page/NotFound";
import NewRoom from "../page/NewRoom";

const App = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/room/:roomID" element={<NewRoom />} /> */}
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      
  );
};

export default App;
