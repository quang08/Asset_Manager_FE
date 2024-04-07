import React from "react";
import axios from "axios";

const Logout = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/logout");
      console.log(response.data); // Handle successful logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
