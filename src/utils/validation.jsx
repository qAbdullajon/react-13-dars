import * as Yup from "yup";

// ============ AUTH ===========
const signInValidationSchema = Yup.object().shape({
  phone_number: Yup.string().required("Phone number is required"),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter")
    .required("Password is required"),
});
const signUpValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  phone_number: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Email is invalit").required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter")
    .required("Password is required"),
});

// ============ Teacher ===========
const teacherValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  course: Yup.string().required("Tanlov majburisy"),
});

// ============ Category ===========
const categoryValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

// ============ Student ===========
const studentValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.string().required("Name is required"),
  number: Yup.string().required("Name is required"),
  guruh: Yup.string().required("Name is required"),
  course: Yup.string().required("Name is required"),
  address: Yup.string().required("Name is required"),
});

// ============ COURSE ===========
const courseValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  duration: Yup.string().required("Name is required"),
  price: Yup.string().required("Name is required"),
});

// ============ GURUH ===========
const guruhValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  course: Yup.string().required("Name is required"),
});

export { signInValidationSchema, signUpValidationSchema, teacherValidationSchema, courseValidationSchema, guruhValidationSchema, studentValidationSchema, categoryValidationSchema };
