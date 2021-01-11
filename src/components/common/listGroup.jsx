import React from "react";

const ListGroup = ({ items, textProperty, valueProperty,selectedItem, onSelect } = this.props) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li 
        key={item[valueProperty]} 
        className={item === selectedItem? "list-group-item active":"list-group-item" }
        onClick={()=>onSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
