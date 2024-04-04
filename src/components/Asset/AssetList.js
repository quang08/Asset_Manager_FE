import axios from "axios";
import React, { useEffect, useState } from "react";

const AssetList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/assets/")
      .then((response) => {
        const res = JSON.stringify(response.data);
        setData(res);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return <div>{data}</div>;
};

export default AssetList;
