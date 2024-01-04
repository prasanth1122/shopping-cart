import React, { useState } from "react";
import AllitemsContext from "./AllitemsContext";

const AllitemsProvider = (props) => {
  const [all_items, setAll_items] = useState([]);

  return (
    <AllitemsContext.Provider value={{ all_items, setAll_items }}>
      {props.children}
    </AllitemsContext.Provider>
  );
};

export default AllitemsProvider;
