import React, { useState } from "react";
import ReadData from "./components/ReadData";
import CreateData from "./components/CreateData";
import { userData } from "./UserData";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState(userData);
  const [newInput, setNewInput] = useState([]);
  const [genderValue, setGenderValue] = useState(false);
  const [flag, setFlag] = useState(false);
  console.log(newInput, genderValue);
  //for reading data on creation
  const formSubmit = (input, gender) => {
    console.log(input);
    const newInput = {
      name: input.name,
      phone: input.phone,
      email: input.email,
      Company: input.Company,
      id: input.id,
      gender: gender,
      image: input.image,
    };
    setInputs([...inputs, newInput]);
  };
  //delete data function from
  const deleteHandler = (id) => {
    setInputs(
      inputs.filter((item) => {
        return item.id !== id;
      })
    );
  };
  //handleEdit
  const getData = (id) => {
    return inputs.find((user) => user.id === id);
  };

  // Update User data on clicking edit button
  const updateData = (editedData, genderName) => {
    console.log(editedData);
    let temp = [...inputs];
    let index = temp.findIndex((item) => item.id === editedData.id);
    temp[index] = editedData;
    temp[index].gender = genderName;
    setInputs(temp);
    setFlag(false);
  };

  return (
    <div className="container-fluid">
      <h1>CRUD Operation</h1>
      <div className="d-flex justify-content-around">
        <div>
          <CreateData
            onSubmit={formSubmit}
            newInput={newInput}
            setNewInput={setNewInput}
            flag={flag}
            updateData={updateData}
            genderValue={genderValue}
            setGenderValue={setGenderValue}
          />
        </div>
        <div>
          <ReadData
            inputs={inputs}
            deleteHandler={deleteHandler}
            getData={getData}
            setNewInput={setNewInput}
            genderValue={genderValue}
            setGenderValue={setGenderValue}
            setFlag={setFlag}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
