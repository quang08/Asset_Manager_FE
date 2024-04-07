import React, { useEffect, useState } from "react";
import axios from "axios";

function SaleList() {
  const [saleList, setSaleList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sale")
      .then((response) => {
        console.log(response.data);
        setSaleList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []);

  return (
      <div className="container mx-auto">
      <div
        className="overflow-x-auto"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Asset</th>
              <th className="border px-4 py-2">Sale Date</th>
              <th className="border px-4 py-2">Sale Price</th>
              <th className="border px-4 py-2">Buyer</th>
            </tr>
          </thead>
          <tbody>
            {saleList.length === 0 ? (
              <tr>
                <td colSpan="4" className="border px-4 py-2 text-center">
                  No sales yet!
                </td>
              </tr>
            ) : (
              saleList.map((sale) => (
                <tr key={sale._id}>
                  <td className="border px-4 py-2">{sale.assetName}</td>
                  <td className="border px-4 py-2">
                    {new Date(sale.saleDate).toLocaleDateString()}
                  </td>
                  <td className="border px-4 py-2">{sale.salePrice}</td>
                  <td className="border px-4 py-2">{sale.buyer}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SaleList;
