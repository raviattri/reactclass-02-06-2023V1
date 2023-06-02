import { useState, React, useEffect } from "react";
import { useParams  } from "react-router-dom";
import axios from "axios";



export default function SingleUser() {
    const {id } = useParams();
    const [getFormData, setFormData] = useState([]);

    const fetchData = () => {
      axios
        .get(`https://6165722bcb73ea001764200d.mockapi.io/students/${id}`)
        .then(function (response) {
          setFormData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div>
        <p>{getFormData.userName}</p>
        <p>{getFormData.rollNo}</p>
    </div>
  )
}
