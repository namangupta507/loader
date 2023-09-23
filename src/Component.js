import React, { useEffect, useState } from "react";
import "./Component.css";

const Component = () => {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors if needed
        setLoader(false);
      });
  }, []);

  return (
    <div>
      {loader ? (
        <div>Loading...</div>
      ) : (
        <div className="data_main">
          {data &&
            data.slice(0, 6).map((item) => (
              <div className="data_block" key={item.id}>
                <h2>{item.title.slice(0, 10)}</h2>
                <p>{item.body.slice(0, 200)}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Component;
