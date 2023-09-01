import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UsersList from "./components/UsersList/UsersList";

function App() {
  const [dataFromAddUser, setdataFromAddUser] = useState([]);

  const ParentAppPuller = (data) => {
    setdataFromAddUser(data); // Update dataFromAddUser when AddUser calls this function
  };

  return (
    <div>
      <AddUser ParentAppPuller={ParentAppPuller} />
      <UsersList ParentAppPusher={dataFromAddUser} />
    </div>
  );
}

export default App;
