import React, { useEffect, useState } from "react";

export default function ApiCall() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await response.json();
      setData(jsonData);
  };

  return (
    <div>
      ApiCall
      {data.map((obj) => (
    <div className="box1">
      <p>Name: {obj.name}</p>
      <p>Username: {obj.username}</p>
      <p> Adress : {obj.address.street}</p>
    </div>
      ))}
    </div>
  );
}
