import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";

import Main from "@component/Main";
import DailyCheck from "@component/DailyCheck";
import FlowChart from "@component/FlowChart";
import SignIn from "@component/SignIn";
import SignUp from "@component/SignUp";
import { EPath } from "@enum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={EPath.MAIN} element={<Main />} />
        <Route path={EPath.DAILYCHECK} element={<DailyCheck />} />
        <Route path={EPath.FLOWCHART} element={<FlowChart />} />
        <Route path={EPath.SIGNIN} element={<SignIn />} />
        <Route path={EPath.SIGNUP} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
