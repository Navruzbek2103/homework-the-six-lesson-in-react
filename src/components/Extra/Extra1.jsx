import React from "react";
import Extra2 from "./Extra2";

const Extra1 = ({message}) => {
  return <>
    <div className="card p-5 bg-success">
      <h1>EXTRA 1</h1>
      <Extra2 message={message}/>
    </div>
  </>
}

export default Extra1;