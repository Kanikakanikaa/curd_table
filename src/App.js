import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import DataTable from "./components/DataTable";
import { useEffect, useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  // userlist -localstotrage.gett // setuser-localset
  const Delete = () => {
    setUserList([]);
  };
  //adding user
  const Adduser = (user) => {
    user.id = userList.length + 1;
    setUserList([...userList, user]);
  };

  const GetData = () => {
    if (localStorage.getItem("userList")) {
      let userListt = JSON.parse(localStorage.getItem("userList"));
      setUserList(userListt);
    }
    // else{

    // }
  };
  //useeffect
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);
  
  
  useEffect(() => {
    GetData();
  }, []);
  
  
  //edit user
  const EditUser = (user) => {
    setUserList(userList.map((iteam) => (user.id === iteam.id ? user : iteam)));
  };

  //Remove user
  const RemoveUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <Header Adduser={Adduser} Delete={Delete} />
      <DataTable
        userList={userList}
        RemoveUser={RemoveUser}
        EditUser={EditUser}
      />
    </div>
  );
}

export default App;
