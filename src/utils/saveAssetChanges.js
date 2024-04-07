import axios from "axios";

export const saveAssetChanges = async (
  newStatus,
  newDescription,
  newCost,
  selectedAsset,
  buyer,
  price
) => {
  console.log("Updated status:", newStatus);
  console.log("Updated description:", newDescription);
  console.log("Updated cost:", newCost);
  try {
    if (newStatus === "Maintaining") {
      const assetId = selectedAsset._id;
      const response = await axios.post("http://localhost:3000/maintenance", {
        assetId,
        description: newDescription,
        cost: newCost,
      });
      console.log("Maintenance record created:", response.data);
    } else if (newStatus === "Sold") {
      const assetId = selectedAsset._id;
      const response = await axios.post("http://localhost:3000/sale", {
        assetId,
        saleDate: new Date(),
        salePrice: price,
        buyer: buyer,
      });
      console.log("Sale record created:", response.data);
    } else if (
      newStatus === "Good condition" &&
      selectedAsset.currentStatus !== "Good condition"
    ) {
      const assetId = selectedAsset._id;
      await axios.put(`http://localhost:3000/assets/${assetId}`, {
        currentStatus: "Good condition",
      });
      console.log("Asset status updated to 'Good condition'");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
