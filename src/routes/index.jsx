import { Route, Routes } from "react-router-dom";

import { Contracts } from "../components/content/contracts";
import { Children } from "../components/content/children";

export const RouteList = () => (
  <Routes>

    <Route path="/contracts" element={<Contracts />} />

    <Route path="/children" element={<Children />} />

  </Routes>
);