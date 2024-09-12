import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import { courseValidationSchema } from "@validation";

const index = (props) => {
  const { open, toggle, postCourse, form, setForm, update, setUpdate, putCurse } = props;
  const initialValues = {
    name: form.name || "",
    duration: form.duration || "",
    price: form.price || "",
  };
  const handleSubmit = async (values) => {
    if (update) {
      putCurse(values);
      toggle(false);
    } else {
      postCourse(values);
      toggle(false);
    }
  };
  return (
    <Modal
      onClick={() => {
        toggle(false);
        setForm({});
        setUpdate(false);
      }}
      className="fixed top-0 left-0 flex items-center justify-center w-full h-[100vh] bg-gray-400 bg-opacity-50"
      isOpen={open}
      toggle={toggle}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-[450px] p-3 bg-white rounded-xl">
        <div>
          <h1 className="text-2xl">Modal</h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={courseValidationSchema}>
          <Form id="form">
            <Field name="name" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="name" component="p" className="text-[red] text-[15px]" />} label="Course name"></Field>
            <Field name="duration" as={TextField} type="number" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="duration" component="p" className="text-[red] text-[15px]" />} label="Course nuration"></Field>
            <Field name="price" as={TextField} type="number" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="price" component="p" className="text-[red] text-[15px]" />} label="Course price"></Field>
          </Form>
        </Formik>
        <div>
          <button form="form" type="submit" className="bg-green-600 text-xl py-1 w-full text-white">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default index;
