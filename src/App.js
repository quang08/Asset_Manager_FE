import { BrowserRouter, Routes, Route } from "react-router-dom";

import AssetList from "./components/Asset/AssetList";

function App() {

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
