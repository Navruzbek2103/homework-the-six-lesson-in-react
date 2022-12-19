import React from "react";
import Extra1 from "../Extra/Extra1";

const index = ({message}) => {
  return (
    <>
      <div className="container">
        <h1 className="text-center">About page</h1>
        <Extra1 message={message}/>
      </div>
    </>
  );
};

export default index;
