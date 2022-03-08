import React, { useState } from "react";
import Header from "../Header/Header";
import List from "../List/List";
import EditTask from "../List/EditTask/EditTask";

const Main = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  const openModalHandler = () => {
    setIsModalShown(true);
  };

  const closeModalHandler = () => {
    setIsModalShown(false);
  };

  return (
    <div>
      {/* test (temporary) */}
      {/* <EditTask /> */}
      {isModalShown && (
        <EditTask onOpen={openModalHandler} onClose={closeModalHandler} />
      )}
      <Header />
      <List onOpen={openModalHandler} />
    </div>
  );
};

export default Main;
