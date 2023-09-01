import { useState } from "react";
import Button from "../Button/Button";
import classes from "./AddUser.module.css";
import Card from "../Card/Card";

const AddUser = () => {
  const initialState = { username: "", age: "" };
  const [userInput, setUserInput] = useState(initialState);

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      userInput["username"].trim().length === 0 ||
      userInput["age"].trim().length === 0
    ) {
      return;
    }

    if (+userInput["age"] < 1) {
      return;
    }

    console.log(userInput);
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
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(event) => onChangeHandler("username", event.target.value)}
          value={userInput["username"]}
        />
        <label htmlFor="age">Age in Years</label>
        <input
          id="age"
          type="number"
          onChange={(event) => onChangeHandler("age", event.target.value)}
          value={userInput["age"]}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
