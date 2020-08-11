import React from "react";

const LeftColumn = () => {
  return (
    <div id="left-column" className="bg-light p-2">
      <h3>Left column</h3>
      <ul id="list" className="pl-4">
        {Array.from(new Array(20), (_, index) => (
          <li key={index}>item {String(index + 1).padStart(2, 0)}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeftColumn;
