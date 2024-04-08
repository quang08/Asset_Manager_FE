import React, { useEffect, useState } from "react";
import axios from "axios";

function MaintenanceList() {
  const [maintenanceList, setMaintenanceList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/maintenance")
      .then((response) => {
        console.log(response.data);
        setMaintenanceList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Asset Maintenance List</h2>
      <div
        className="overflow-x-auto"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Asset</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Maintenance Cost</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceList.length === 0 ? (
              <tr>
                <td colSpan="4" className="border px-4 py-2 text-center">
                  No maintaining asset available!
                </td>
              </tr>
            ) : (
              maintenanceList.map((maintenance) => (
                <tr key={maintenance._id}>
                  <td className="border px-4 py-2">{maintenance.assetName}</td>
                  <td className="border px-4 py-2">
                    {maintenance.description}
                  </td>
                  <td className="border px-4 py-2">{maintenance.cost}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MaintenanceList;
