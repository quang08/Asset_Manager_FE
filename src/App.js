import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssetList from "./components/Asset/AssetList";

function App() {
  const [data, setData] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="assets" element={<AssetList/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
