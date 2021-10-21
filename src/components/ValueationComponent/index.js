import React from "react";

import Items from "./Items";

const ValueationComponent = () => {
  return (
    <div className="valueationContainer wrap">
      <Items />
      <Items reverse />
      <Items />
    </div>
  );
};

export default ValueationComponent;
