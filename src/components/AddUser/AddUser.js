import React, { useState } from "react";
import Button from "../Button/Button";
import classes from "./AddUser.module.css";
import Card from "../Card/Card";
import UsersList from "../UsersList/UsersList";

const AddUser = (props) => {
  const initialState = { username: "", age: "" };

  const [userInput, setUserInput] = useState(initialState);
  const [usersList, setUsersList] = useState([]); // Initialize an empty array for users

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      return;
    }

    if (+userInput.age < 1) {
      return;
    }

    // Append the new user to the usersList array
    const updatedUsersList = [...usersList, userInput];
    setUsersList(updatedUsersList);

    // Pass the updated usersList directly to the parent component
    props.ParentAppPuller(updatedUsersList);

    setUserInput(initialState); // Reset the form inputs
  };

  const onChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(event) =>
              onChangeHandler("username", event.target.value)
            }
            value={userInput.username}
          />

          <label htmlFor="age">Age in Years</label>
          <input
            id="age"
            type="number"
            onChange={(event) => onChangeHandler("age", event.target.value)}
            value={userInput.age}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
