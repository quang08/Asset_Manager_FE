import React, { useEffect, useState } from "react";
import axios from "axios";

function AssetList() {
  const [assetList, setAssetList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/assets")
      .then(response => {
        setAssetList(response.data); 
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
             
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Purchase Date</th>
              <th className="border px-4 py-2">Purchase Cost</th>
              <th className="border px-4 py-2">Current Status</th>
             
            </tr>
          </thead>
          <tbody>
            {assetList.map(asset => (
              <tr key={asset._id}>
                
                <td className="border px-4 py-2">{asset.name}</td>
                <td className="border px-4 py-2">{asset.description}</td> 
                <td className="border px-4 py-2">{new Date(asset.purchaseDate).toLocaleDateString()}</td> 
                <td className="border px-4 py-2">{asset.purchaseCost}</td> 
                <td className="border px-4 py-2">{asset.currentStatus}</td> 
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AssetList;
