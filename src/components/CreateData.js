import React, { useState } from "react";
import EditData from "./EditData";
export default function CreateData({
  onSubmit,
  handleEdit,
  flag,
  newInput,
  setNewInput,
  updateData,
  setGenderValue,
  genderValue,
}) {
  const [input, setInput] = useState("");
  const [gender, setGender] = useState("");

  const handlerChange = (event) => {
    setGender(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    onSubmit(input, gender);
    setGender("");
    setInput({
      name: "",
      gender: "",
      id: "",
      Company: "",
      phone: "",
      email: "",
      image: "",
    });
  };
  if (flag) {
    return (
      <EditData
        newInput={newInput}
        setNewInput={setNewInput}
        updateData={updateData}
        genderValue={genderValue}
        setGenderValue={setGenderValue}
      />
    );
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            UserName : &nbsp;
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="FullName"
              value={input.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          Gender : &nbsp;
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={handlerChange}
              required="required"
            />

            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={handlerChange}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">
            UserId : &nbsp;
            <input
              className="form-control"
              type="number"
              name="id"
              value={input.id}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Contact Number : &nbsp;
            <input
              className="form-control"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={input.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email Id : &nbsp;
            <input
              className="form-control"
              placeholder="name@example.com"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
