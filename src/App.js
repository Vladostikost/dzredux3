import './App.css';
import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (text) => {
    setItems((prevItems) => [...prevItems, { id: Date.now(), text }]);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const itemsList = items.map((item) => (
    <li key={item.id}>
      {item.text} <button onClick={() => handleRemoveAllItems()}>Remove All</button>
    </li>
  ));

  return (
    <div>
      <button onClick={() => handleAddItem("Item")}>Add Item</button>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default App;