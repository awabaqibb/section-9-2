import React from "react";
import classes from "./UserLists.module.css";

const UsersList = (props) => {
  const usersList = props.ParentAppPusher;
  console.log(usersList);

  return (
    <div className={classes.users}>
      <ul className={classes.ul}>
        {usersList.map((user, index) => (
          <li key={index}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
