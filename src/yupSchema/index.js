import * as yup from "yup";
export const contactSchema = yup
  .object({
    firstname: yup.string().min(0).required("Firstname is required"),
    lastname: yup.string().min(0).required("Lastname is required"),
    phone: yup.string().min(0).required("Phone is required"),
    category: yup.string().min(0).required("Category is required"),
    subject: yup.string().min(0).required("Subject is required"),
    email: yup.string().email("Email is invalid").required("email is required"),
    message: yup.string().min(0).required("Message is required"),
    isAgreeWithPolicy: yup.boolean().required(),
    wantReceiveUpdates: yup.boolean().required(),
  })
  .required();
