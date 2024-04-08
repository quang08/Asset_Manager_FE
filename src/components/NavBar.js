import React from "react";

const NavBar = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 mb-20 shadow-lg">
        <a className="text-xl font-bold cursor-pointer" href="/">
          Asset Manager App
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/maintain">Maintain</a>
            </li>
            <li>
              <a href="/sales">Sales</a>
            </li>
            <li>
              <a href="/report">Report</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
