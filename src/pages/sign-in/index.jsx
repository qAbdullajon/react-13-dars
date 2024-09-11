import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const [form, setForm] = useState({});
  const [count, setCount] = useState(3);
  const [timer, setTimer] = useState(3);
  const [inter, setInter] = useState("");
  const [disabled, setDisabled] = useState(false);
  const naviget = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const notify = () =>
    toast("Error", {
      type: "error",
      autoClose: 3000,
    });
  const handleClick = () => {
    if (form.username === "admin") {
      naviget("/admin");
    } else if (form.username === "user") {
      naviget("/student");
    } else {
      notify();
      setCount(count - 1);
    }
  };
  useEffect(() => {
    if (count === 0) {
      setDisabled(true);
      const a = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      setInter(a);
    }
  }, [count]);
  useEffect(() => {
    if (timer === 0) {
      setDisabled(false);
      clearInterval(inter);
      setCount(3);
      setTimer(3);
    }
  }, [timer]);
  return (
    <div className="flex justify-center pt-8">
      <ToastContainer />
      <div>
        <div>
          <h1 className="text-3xl pb-2">Sign In</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()} id="form">
          <TextField sx={{ marginBlock: "10px" }} fullWidth disabled={disabled} label="Username" name="username" id="fullWidth" onChange={handleChange} />
          <TextField fullWidth disabled={disabled} label="Password" name="password" id="fullWidth" onChange={handleChange} />
        </form>
        <div>
          <Button type="submit" form="form" onClick={handleClick} sx={{ marginTop: "10px" }} variant="contained" disabled={disabled}>
            Sign In
          </Button>
        </div>
        {count == 0 && <p>Kechirasiz ko'p xato qildingiz {timer}</p>}
      </div>
    </div>
  );
};

export default index;
