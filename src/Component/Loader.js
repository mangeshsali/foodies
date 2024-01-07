import React from "react";

function Loader() {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <span className="loader"></span>
        <div className="m-3 text-3xl">Loading</div>
      </div>
    </>
  );
}

export default Loader;
