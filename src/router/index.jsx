import React, { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "../App";
import { SignIn, SignUp, Admin, StudentAdmin, TeacherAdmin, CourseAdmin, GuruhAdmin, CategoryAdmin } from "@pages";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<TeacherAdmin />} />
          <Route path="/admin/student" element={<StudentAdmin />} />
          <Route path="/admin/guruh" element={<GuruhAdmin />} />
          <Route path="/admin/course" element={<CourseAdmin />} />
          <Route path="/admin/category" element={<CategoryAdmin />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
