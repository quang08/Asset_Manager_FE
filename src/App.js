import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AssetList from "./components/Asset/AssetList";
import MaintenanceList from "./components/Maintenance/MaintenanceList";
import SaleList from "./components/Sale/SaleList";
import NavBar from "./components/NavBar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Logout from "./components/Auth/Logout";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 py-2">
        <BrowserRouter>
          <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
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
