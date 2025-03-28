import React from "react";
import { useRouteError } from "react-router-dom";

const RouterError = () => {
  const Err = useRouteError();
  console.log(Err);
  return (
    <div>
      <h1>{Err.status}</h1>
      <h1>{Err.statusText}</h1>
    </div>
  );
};

export default RouterError;
