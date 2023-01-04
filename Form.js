import React from "react";
import { useState } from "react";
import axios from "axios";

const FormContainer = () => {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(inputs);
    console.log(inputs);

    await axios.post("http://localhost:5050/api/v1/create", inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          Enter your age:
          <input type="number" name="age" onChange={handleChange} />
        </label>
        <label>
          password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default FormContainer;
