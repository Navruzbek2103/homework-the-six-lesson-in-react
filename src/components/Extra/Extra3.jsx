import React, {useContext} from "react";
import { dataContext } from "../../context";

const Extra3 = ({message}) => {
  const them = useContext(dataContext)
  console.log(them)
  return <>
    <div className="card p-5 bg-danger">
      <h1>EXTRA 3</h1>
    </div>
  </>
}

export default Extra3;