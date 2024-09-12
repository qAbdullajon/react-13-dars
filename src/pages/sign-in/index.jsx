import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { signInValidationSchema } from "@validation";

const index = () => {
  const naviget = useNavigate();
  const initialValues = {
    name: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    if (values.name === "admin") {
      naviget("/admin");
    }
  };

  return (
    <div className="flex justify-center pt-8">
      <ToastContainer />
      <div>
        <div>
          <h1 className="text-3xl pb-2">Sign In</h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signInValidationSchema}>
          <Form id="sign-in">
            <Field name="name" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="name" component="p" className="text-[red] text-[15px]" />} label="Name"></Field>
            <Field name="password" as={TextField} type="password" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="password" component="p" className="text-[red] text-[15px]" />} label="Password"></Field>
          </Form>
        </Formik>
        {/* <form onSubmit={(e) => e.preventDefault()} id="form">
          <TextField sx={{ marginBlock: "10px" }} fullWidth disabled={disabled} label="Username" name="username" id="fullWidth" onChange={handleChange} />
          <TextField fullWidth disabled={disabled} label="Password" name="password" id="fullWidth" onChange={handleChange} />
        </form> */}
        <div>
          <Button type="submit" form="sign-in" sx={{ marginTop: "10px" }} variant="contained">
            Sign In
          </Button>
        </div>
        {/* {count == 0 && <p>Kechirasiz ko'p xato qildingiz {timer}</p>} */}
      </div>
    </div>
  );
};

export default index;
