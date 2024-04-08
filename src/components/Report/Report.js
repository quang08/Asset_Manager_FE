import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Report() {
  const [assets, setAssets] = useState([]);
  const [sales, setSales] = useState([]);
  const [exportFormat, setExportFormat] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assetsResponse, salesResponse] = await Promise.all([
          axios.get("http://localhost:3000/assets"),
          axios.get("http://localhost:3000/sale"),
        ]);

        setAssets(assetsResponse.data);
        setSales(salesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const calculateProfit = (asset) => {
    const sale = sales.find((sale) => sale.asset === asset._id);
    if (sale) {
      return sale.salePrice - asset.purchaseCost;
    }
    return null;
  };

  const getProfitColor = (profit) => {
    if (profit > 0) {
      return "text-green-500";
    } else if (profit < 0) {
      return "text-red-500";
    }
    return "";
  };

  const exportToPDF = () => {
    const input = document.getElementById("report-table");

    if (!input) {
      console.error("Element with id 'report-table' not found");
      return;
    }

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("report.pdf");
    });
  };

  const handleExportFormatChange = (event) => {
    setExportFormat(event.target.value);
  };

  const handleExport = () => {
    exportToPDF();
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Asset Report</h2>
      <div id="report-table">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Purchase Date</th>
              <th className="border px-4 py-2">Purchase Cost</th>
              <th className="border px-4 py-2">Current Status</th>
              <th className="border px-4 py-2">Profit</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset._id}>
                <td className="border px-4 py-2">{asset.name}</td>
                <td className="border px-4 py-2">{asset.description}</td>
                <td className="border px-4 py-2">
                  {new Date(asset.purchaseDate).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">{asset.purchaseCost}</td>
                <td className="border px-4 py-2">{asset.currentStatus}</td>
                <td
                  className={`border px-4 py-2 ${getProfitColor(
                    calculateProfit(asset)
                  )}`}
                >
                  {asset.currentStatus === "Sold"
                    ? calculateProfit(asset)
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button
          onClick={handleExport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Export
        </button>
        <div className="relative inline-block">
          <select
            value={exportFormat}
            onChange={handleExportFormatChange}
            className="bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 py-2 px-4"
          >
            <option value="">Select Format</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Report;
