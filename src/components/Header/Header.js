import React from "react";

import { useSelector } from "react-redux";

const Header = () => {
  const totalQuantityOfTasks = useSelector((state) => state.list.totalQuantity);

  return (
    <header>
      <h2>Redux ToDo</h2>
      <span>{totalQuantityOfTasks}</span>
    </header>
  );
};

export default Header;
