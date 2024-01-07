import React from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPg = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Opps....</h1>
      <h2>Something wents to wrong!!!</h2>
      <h3>{err.status + " : " + err.statusText}</h3>
    </>
  );
};
