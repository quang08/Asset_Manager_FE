import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 mb-20 shadow-lg">
        <a className="text-xl font-bold cursor-pointer" href="/assets">
          Asset Manager App
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/assets">Assets</a>
            </li>
            <li>
              <a href="/maintain">Maintain</a>
            </li>
            <li>
              <a href="/sales">Sales</a>
            </li>
            <li>
              <a>Report</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
