import React, { useEffect, useState } from "react";
import axios from "axios";
import { saveAssetChanges } from "../../utils/saveAssetChanges";

function AssetList() {
  const [assetList, setAssetList] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCost, setNewCost] = useState(0);
  const [buyer, setBuyer] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/assets")
      .then((response) => {
        setAssetList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEditClick = (asset) => {
    setSelectedAsset(asset);
    setNewStatus(asset.currentStatus);
    setNewDescription(asset.description);
    setNewCost(
      asset.currentStatus === "Maintaining" || asset.currentStatus === "Sold"
        ? asset.purchaseCost
        : 0
    );
    setBuyer("");
    setPrice(0);
    setEditMode(true);
  };

  const handleDeleteClick = async (assetId) => {
    try {
      await axios.delete(`http://localhost:3000/assets/${assetId}`);
      setAssetList(assetList.filter((asset) => asset._id !== assetId));
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSave = async () => {
    await saveAssetChanges(
      newStatus,
      newDescription,
      newCost,
      selectedAsset,
      buyer,
      price
    );

    window.location.reload();
  };

  return (
    <div className="container mx-auto h-full">
      <div className="overflow-x-auto max-h-1/2">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Purchase Date</th>
              <th className="border px-4 py-2">Purchase Cost</th>
              <th className="border px-4 py-2">Current Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assetList.map((asset) => (
              <tr key={asset._id}>
                <td className="border px-4 py-2">{asset.name}</td>
                <td className="border px-4 py-2">{asset.description}</td>
                <td className="border px-4 py-2">
                  {new Date(asset.purchaseDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{asset.purchaseCost}</td>
                <td className="border px-4 py-2">{asset.currentStatus}</td>
                <td className="border px-4 py-2 flex justify-center items-center">
                  <button
                    onClick={() => handleEditClick(asset)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(asset._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editMode && selectedAsset && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl mb-4">Edit Asset</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Status:
              </label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Good condition">Good condition</option>
                <option value="Maintaining">Maintaining</option>
                <option value="Sold">Sold</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {newStatus === "Sold" ? "Buyer" : "Description"}:
              </label>
              <input
                type="text"
                value={newStatus === "Sold" ? buyer : newDescription}
                onChange={(e) =>
                  newStatus === "Sold"
                    ? setBuyer(e.target.value)
                    : setNewDescription(e.target.value)
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {(newStatus === "Maintaining" || newStatus === "Sold") && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Price:
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            )}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssetList;
