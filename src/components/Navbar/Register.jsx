import React, { useState, useEffect } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [userSave, setUserSave] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await axios.get("http://localhost:3000/user");
        setUserSave(userData?.data?.user);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []); // Run only once

  const handleSubmit = async () => {
    if (!name || !email || !password || !age) {
      alert("All fields are required");
      return;
    }
    const body = { name, email, password, age };
    try {
      const userData = await axios.post("http://localhost:3000/user", body);
      if (userData) {
        alert(userData.data.message);
        setUserSave((prev) => [...prev, body]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteUser = await axios.delete(`http://localhost:3000/user/${id}`);
      if (deleteUser) {
        alert(deleteUser.data.message);
        setUserSave((prev) => prev.filter((user) => user._id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="text" placeholder="age" onChange={(e) => setAge(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

      {userSave.map((data, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.password}</p>
          <p>{data.age}</p>
          <button onClick={() => handleDelete(data._id)}>Delete</button>
          <button>Update</button>
        </div>
      ))}
    </>
  );
}

export default Register;

