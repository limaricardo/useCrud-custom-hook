import React, { useContext, useEffect } from "react";

import Context from "../context/Context";

const Component1 = ({ children }) => {

  // Forma de usar a função com context
  // Dessa forma fica "preso" a props passada
  const { create } = useContext(Context);

  useEffect(() => {
    create("1");
  }, [create]);

  console.log("Render Component1");
  return <div>{children}</div>;
};

export default Component1;
