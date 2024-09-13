import axios from "axios";
import React, { useRef, useState } from "react";
import { Modal } from "reactstrap";
import { studentValidationSchema } from "@validation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextField, Select, MenuItem, InputLabel, FormControl, FormHelperText } from "@mui/material";

const index = (props) => {
  const { open, toggle, postStudent, form, setForm, setUpdate, course, guruh } = props;

  const initialValues = {
    name: form.name || "",
    age: form.age || "",
    number: form.number || "",
    guruh: form.guruh || "",
    course: form.course || "",
    address: form.address || "",
  };
  const handleSubmit = async (values) => {
    postStudent(values);
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
      <div onClick={(e) => e.stopPropagation()} className="w-[450px] p-3 bg-white rounded-xl max-h-[90vh] overflow-y-scroll">
        <div>
          <h1 className="text-2xl">Modal</h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={studentValidationSchema}>
          <Form id="form">
            <Field name="name" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="name" component="p" className="text-[red] text-[15px]" />} label="Student name" />
            <Field name="age" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="age" component="p" className="text-[red] text-[15px]" />} label="Student age" />
            <Field name="number" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="number" component="p" className="text-[red] text-[15px]" />} label="Phone number" />
            <FormControl fullWidth variant="outlined" margin="normal">
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
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="labelIdGuruh">Guruh</InputLabel>
              <Field name="guruh" as={Select} label="Guruh" labelId="labelIdGuruh">
                {guruh.map((item, i) => {
                  return (
                    <MenuItem key={i} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Field>
              <FormHelperText>
                <ErrorMessage name="guruh" component="p" className="text-[red] text-[15px]" />
              </FormHelperText>
            </FormControl>
            <Field name="address" as={TextField} type="text" margin="normal" variant="outlined" fullWidth helperText={<ErrorMessage name="address" component="p" className="text-[red] text-[15px]" />} label="Address" />
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
