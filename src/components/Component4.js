import React, { useEffect, useRef } from "react";

import useCRUD from "../hooks/useCRUD";

const Component4 = ({ children }) => {
  const { create, retrieve, loading } = useCRUD({ entity: "post" });
  const componentRef = useRef(new Date().getTime());

  useEffect(() => {
    create("4");
    retrieve("4");
  }, [create, retrieve]);

  console.log("Render Component4", componentRef.current);
  return <div>{loading ? <p>Carregando</p> : children}</div>;
};

export default Component4;
