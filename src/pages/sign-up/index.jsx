import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "react-toastify/dist/ReactToastify.css";
import { signUpValidationSchema } from "@validation";
import axios from "axios";

const index = () => {
  const naviget = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    try {
      const res = await axios.post("https://texnoark.ilyosbekdev.uz/auth/admin/sign-up", values);
      if (res.status === 201) {
        naviget("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center pt-8">
      <ToastContainer />
      <div className="max-w-[500px]">
        <div>
          <h1 className="text-3xl pb-2 w-full">Sign Up</h1>
        </div>
        <Formik className="w-full" initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
          <Form id="sign-up">
            <Field name="first_name" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="first_name" component="p" className="text-[red] text-[15px]" />} label="First name"></Field>
            <Field name="last_name" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="last_name" component="p" className="text-[red] text-[15px]" />} label="Last name"></Field>
            <Field name="phone_number" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="phone_number" component="p" className="text-[red] text-[15px]" />} label="Phone number"></Field>
            <Field name="email" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="email" component="p" className="text-[red] text-[15px]" />} label="Email"></Field>
            <Field name="password" as={TextField} type="password" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="password" component="p" className="text-[red] text-[15px]" />} label="Password"></Field>
          </Form>
        </Formik>
        <div className="flex gap-3">
          <Button type="submit" form="sign-up" sx={{ marginTop: "10px" }} variant="contained">
            Sign Up
          </Button>
          <Button onClick={() => naviget("/")} sx={{ marginTop: "10px" }} variant="outlined">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default index;
