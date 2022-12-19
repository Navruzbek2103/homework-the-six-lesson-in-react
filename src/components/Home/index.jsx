import React, { useState, useEffect } from "react";

const index = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 p-5">
              <ol className="list-group list-group-light list-group-numbered">
                {data.map((el, i) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-start"
                      key={el.id}
                    >
                      <h1></h1>
                      <div className="ms-2 me-auto" key={i}>
                        <div className="fw-bold">
                          {`Completed: ${el.completed}`}
                        </div>
                        {el.title}
                      </div>
                      <span className="badge badge-primary rounded-pill">
                        {el.id}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
