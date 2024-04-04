import React, { useEffect, useState } from "react";

import { assetService } from "../../services";
import { AssetItem } from "./AssetItem"

function AssetList() {
  const [assetList, setAssetList] = useState([]);

  const handleGetAssets = async () => {
        const data = await assetService.getAllAssets();

        console.log(data)

        setAssetList(data);
  }

  useEffect(() => {
        handleGetAssets();
  }, []);

  return (
    <div>
      <h1 className="font-bold">Asset Manager App</h1>

      {
        assetList.length > 0 && assetList.map((asset, index) => <AssetItem key={index} data={asset} />)
      }
    </div>
  );
}

export default AssetList;