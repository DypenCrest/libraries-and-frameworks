import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./assets/data.js";
import { useEffect, useState } from "react";
import Login from "./components/Login.jsx";
import userCredential from "./assets/credential.js";

function App() {
  const [formDetails, setFormDetails] = useState({
    user: "",
    password: "",
    remember: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
    console.log(filteredData);
  };
  const clearSearchValue = () => {
    setSearchValue("");
  };

  const credentialChecker = () => {
    if (
      formDetails.user === userCredential.user &&
      formDetails.password === userCredential.password
    ) {
      setIsLoggedIn(true);
      if (formDetails.remember) {
        localStorage.setItem("user", formDetails.user);
        localStorage.setItem("isLoggedIn", true);
      }
    } else {
      alert("Invalid credentials");
    }
  };

  useEffect(() => {
    const rememberCheck = localStorage.getItem("isLoggedIn");
    if (rememberCheck) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        clearSearchValue={clearSearchValue}
        handleSearch={handleSearch}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />

      {isLoggedIn ? (
        <div className="flex gap-4 flex-wrap my-20 px-60">
          {filteredData.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <Login
          setFormDetails={setFormDetails}
          formDetails={formDetails}
          credentialChecker={credentialChecker}
        />
      )}
    </>
  );
}

export default App;
