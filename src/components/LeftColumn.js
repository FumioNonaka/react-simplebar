import React from "react";
import SimpleBar from "simplebar-react";

const LeftColumn = ({ headerHeight, leftColumnHeight, leftColumnRef }) => {
  return (
    <div
      id="left-column"
      ref={leftColumnRef}
      className="bg-light p-2"
      style={{
        position: "fixed",
        top: headerHeight,
      }}
    >
      <SimpleBar
        style={{
          height: leftColumnHeight,
        }}
      >
        <h3>Left column</h3>
        <ul id="list" className="pl-4">
          {Array.from(new Array(20), (_, index) => (
            <li key={index}>item {String(index + 1).padStart(2, 0)}</li>
          ))}
        </ul>
      </SimpleBar>
    </div>
  );
};

export default LeftColumn;
