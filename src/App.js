import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AssetList from "./components/Asset/AssetList";
import MaintenanceList from "./components/Maintenance/MaintenanceList";
import SaleList from "./components/Sale/SaleList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-2">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="assets" element={<AssetList />} />
              <Route path="sales" element={<SaleList />} />
              <Route path="maintain" element={<MaintenanceList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
