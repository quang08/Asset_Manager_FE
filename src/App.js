import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AssetList from "./components/Asset/AssetList";
import MaintenanceList from "./components/Maintenance/MaintenanceList";

function App() {
  return (
    <div className="container mx-auto px-4 py-2"> 
      <BrowserRouter>
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Asset Manager App</h1> 
          <nav>
            <ul className="flex space-x-4">
              <li>
                <NavLink to="/assets" activeClassName="font-bold">Assets</NavLink>
              </li>
              <li>
                <NavLink to="/maintain" activeClassName="font-bold">Maintain</NavLink>
              </li>
              <li>
                <NavLink to="/report" activeClassName="font-bold">Report</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/">
            <Route path="assets" element={<AssetList />} />
            <Route path="maintain" element={<MaintenanceList />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
