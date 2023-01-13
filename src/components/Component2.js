import React, { useEffect } from "react";

import useCRUD from "../hooks/useCRUD";

const Component2 = ({ children }) => {

  // Não fica preso ao context, pois importa
  // o custom Hook direto, enviando a entity
  // direto na importação
  const { create } = useCRUD({ entity: "post" });

  useEffect(() => {
    create("2");
  }, [create]);

  console.log("Render Component2");
  return <div>{children}</div>;
};

export default Component2;
