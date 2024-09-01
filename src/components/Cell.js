"use client";

import { useState } from "react";

const Cell = ({ rowIndex, colIndex }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border border-gray-300 p-2 text-center bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default Cell;
