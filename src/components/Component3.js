import React, { useContext, useEffect } from "react";

import Context2 from "../context/Context2";

const Component3 = ({ children }) => {
  const { create } = useContext(Context2);

  useEffect(() => {
    create("3");
  }, [create]);

  console.log("Render Component3");
  return <div>{children}</div>;
};

export default Component3;
