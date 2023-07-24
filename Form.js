import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";

const Form = () => {
  const username = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);

  const localSign = localStorage.getItem("signup");

  useEffect(() => {
    if (localSign) {
      setShowHome(true);
    }
  }, [localSign]);

  const handleClick = () => {
    if (username.current.value && password.current.value) {
      localStorage.setItem("username", username.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signup", username.current.value);
      alert("Account created succesfully");
    }
  };
  return (
    <div className="App">
    {showHome?<Home />:


      <Form>
        <input type="text" placeholder="Username" ref={username} />
        <br />
        <br />

        <input type="password" placeholder="Password" ref={password} />
        <br />
        <br />

        <button onClick={handleClick}>Submit</button>
      </Form>
  }
    </div>
  );
};

export default Form;
