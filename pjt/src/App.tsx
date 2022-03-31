import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

import Main from "@component/Main";
import DailyCheck from "@component/DailyCheck";
import { EPath } from "@enum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={EPath.MAIN} element={<Main />} />
        <Route path={EPath.DAILYCHECK} element={<DailyCheck />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
