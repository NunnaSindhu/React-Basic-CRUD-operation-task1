import React, { useState, useEffect } from "react";
export default function EditData({ newInput, setNewInput,updateData, setGenderValue,genderValue }) {

  //radio button onchange handler function
  const handlerChange = (event) => {
    setGenderValue(event.target.value);
  };
  // input onchange handler function
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewInput((values) => ({ ...values, [name]: value }));
  };

  //on Submit handler function

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(newInput, genderValue);
    setNewInput("");
    setGenderValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UserName : &nbsp;
          <input
            type="text"
            name="name"
            placeholder="FullName"
            value={newInput && newInput.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Gender : &nbsp;
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={genderValue === "Male"}
            onChange={handlerChange}
          />
          &nbsp;Male&nbsp;&nbsp;
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={genderValue === "Female"}
            onChange={handlerChange}
          />
          &nbsp;Female
        </label>
        <br />
        <br />
        <label>
          UserId : &nbsp;
          <input
            type="number"
            name="id"
            value={newInput && newInput.id}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />
        <label>
          Contact Number : &nbsp;
          <input
            type="tel"
            name="phone"
            value={newInput && newInput.phone}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <label>
          Email Id : &nbsp;
          <input
            type="email"
            name="email"
            value={newInput && newInput.email}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />
        <button className="btn btn-primary" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
