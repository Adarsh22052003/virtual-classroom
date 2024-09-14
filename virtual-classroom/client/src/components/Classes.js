// src/components/Classes.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await axios.get("/api/classes");
      setClasses(res.data);
    };
    fetchClasses();
  }, []);

  return (
    <div>
      <h1>Available Classes</h1>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>{classItem.className}</li>
        ))}
      </ul>
    </div>
  );
};

export default Classes;
