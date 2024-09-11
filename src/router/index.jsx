import React, { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "../App";
import { SignIn, Admin, Student, StudentAdmin, TeacherAdmin } from "@pages";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<TeacherAdmin />} />
          <Route path="/admin/student" element={<StudentAdmin />} />
        </Route>
        <Route path="/student" element={<Student />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
