import * as Yup from "yup";

// ============ AUTH ===========
const signInValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter")
    .required("Password is required"),
});

// ============ Teacher ===========
const teacherValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  course: Yup.string().required("Tanlov majburisy"),
});

// ============ COURSE ===========
const courseValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  duration: Yup.string().required("Name is required"),
  price: Yup.string().required("Name is required"),
});

export { signInValidationSchema, teacherValidationSchema, courseValidationSchema };
