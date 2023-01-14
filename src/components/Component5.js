import React, { useRef } from "react";

const Component5 = ({ children }) => {
  const componentRef = useRef(new Date().getTime());

  console.log("Render Component5", componentRef.current);
  return <div>{children}</div>;
};

export default Component5;
