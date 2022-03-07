import React from "react";

export default function ReadData({
  inputs,
  deleteHandler,
  getData,
  setNewInput,
  genderValue,
  setGenderValue,
  setFlag,
}) {
  const handleEdit = (id) => {
    setFlag((prev) => !prev);
    const userData = getData(id);
    console.log(userData);
    setNewInput(userData);
    setGenderValue(userData.gender);
  };

  return (
    <div className="container">
      <table className="table-hover">
        <thead>
          <tr>
            <th>S.No</th>
            <th>User Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>PhoneNumber</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {inputs.map((user) => {
          return (
            <tbody key={user.id}>
              <tr>
                <td> </td>
                <td> {user.id}</td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteHandler(user.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
