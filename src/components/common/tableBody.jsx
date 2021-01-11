import React, { Component } from "react";
let _ = require("lodash");

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { columns, data } = this.props;
    return (
      <thead>
        {data.map((item, i) => (
          <tr key={i}>
            {columns.map((column, j) => (
              <td key={j}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </thead>
    );
  }
}
export default TableBody;
