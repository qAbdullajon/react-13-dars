import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal } from "reactstrap";
import { guruhValidationSchema } from "@validation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from "@mui/material";

const index = (props) => {
  const { open, toggle, postTeacher, form, setForm, setUpdate, course } = props;
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const initialValues = {
    name: form.name || "",
    course: form.course || "",
  };
  const handleSubmit = async (values) => {
    postTeacher(values);
    toggle(false);
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={guruhValidationSchema}>
          <Form id="form">
            <Field name="name" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="name" component="p" className="text-[red] text-[15px]" />} label="Guruh name" />
            <FormControl fullWidth variant="outlined">
              <InputLabel id="labelId">Course</InputLabel>
              <Field name="course" as={Select} label="Course" labelId="labelId">
                {course.map((item, i) => {
                  return (
                    <MenuItem key={i} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Field>
              <FormHelperText>
                <ErrorMessage name="course" component="p" className="text-[red] text-[15px]" />
              </FormHelperText>
            </FormControl>
          </Form>
        </Formik>
        <div>
          <button form="form" type="submit" className="bg-green-600 mt-3 text-xl py-1 w-full text-white">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default index;
