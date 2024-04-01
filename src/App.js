import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/assets/")
      .then((response) => { console.log(data); setData(response.data) })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="font-bold">Asset Manager App</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default App;
