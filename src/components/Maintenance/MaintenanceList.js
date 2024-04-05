import React, { useEffect, useState } from "react";
import axios from "axios";

function MaintenanceList() {
  const [maintenanceList, setMaintenanceList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/maintenance")
      .then(response => {
        setMaintenanceList(response.data); 
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Asset</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {maintenanceList.map(maintenance => (
              <tr key={maintenance._id}>
                <td className="border px-4 py-2">{maintenance.asset}</td>
                <td className="border px-4 py-2">{maintenance.type}</td> 
                <td className="border px-4 py-2">{new Date(maintenance.date).toLocaleDateString()}</td> 
                <td className="border px-4 py-2">{maintenance.description}</td> 
                <td className="border px-4 py-2">{maintenance.cost}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MaintenanceList;
