import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { signInValidationSchema } from "@validation";
import axios from "axios";

const index = () => {
  const naviget = useNavigate();
  const initialValues = {
    phone_number: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    const res = await axios.post("https://texnoark.ilyosbekdev.uz/auth/sign-in", values);
    if (res.status === 201) {
      const token = res.data.data.tokens.access_token;
      localStorage.setItem("token", token);
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
            <Field name="phone_number" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="phone_number" component="p" className="text-[red] text-[15px]" />} label="Phone number"></Field>
            <Field name="password" as={TextField} type="password" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="password" component="p" className="text-[red] text-[15px]" />} label="Password"></Field>
          </Form>
        </Formik>
        <div className="flex items-center gap-3">
          <Button type="submit" form="sign-in" sx={{ marginTop: "10px" }} variant="contained">
            Sign In
          </Button>
          <Button onClick={() => naviget("/sign-up")} sx={{ marginTop: "10px" }} variant="outlined">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;
