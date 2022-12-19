import React from "react";
import Extra3 from "./Extra3";

const Extra2 = ({message}) => {
  return <>
    <div className="card p-5 bg-warning">
      <h1>EXTRA 2</h1>
      <Extra3 message={message}/>
    </div>
  </>
}

export default Extra2;