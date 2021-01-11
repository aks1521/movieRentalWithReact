import React from "react";

const tableHeader = ({ columns, onSort }) => {
  return (
    <thead>
      <tr>
        {columns.map((x,i) => (
          <th key={i} onClick={() => onSort(x.path)}>{x.lable}</th>
        ))}
      </tr>
    </thead>
  );
};

export default tableHeader;
