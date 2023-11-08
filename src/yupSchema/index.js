import * as yup from "yup";
export const contactSchema = yup
  .object({
    Voornaam: yup.string().min(0).required("Voornaam is verplicht"),
    Achternaam: yup.string().min(0).required("Achternaam is verplicht"),
    Telefoonnummer: yup.string().min(0).required("Telefoonnummer is verplicht"),
    Categorie: yup.string().min(0).required("Categorie is verplicht"),
    Onderwerp: yup.string().min(0).required("Onderwerp is verplicht"),
    Email: yup
      .string()
      .email("E-mail is invalid")
      .required("E-mail is verplicht"),
    Bericht: yup.string().min(0).required("Bericht is verplicht"),
    isAgreeWithPolicy: yup.boolean().required(),
    wantReceiveUpdates: yup.boolean().required(),
  })
  .required();
export const ontruimingSchema = yup
  .object({
    Voornaam: yup.string().min(0).required("Voornaam is verplicht"),
    Achternaam: yup.string().min(0).required("Achternaam is verplicht"),
    Telefoonnummer: yup.string().min(0).required("Telefoonnummer is verplicht"),
    Ontruiming: yup.string().min(0).required("Ontruiming is verplicht"),
    Email: yup
      .string()
      .email("E-mail is invalid")
      .required("E-mail is verplicht"),
    Bericht: yup.string().min(0).required("Bericht is verplicht"),
    isAgreeWithPolicy: yup.boolean().required(),
  })
  .required();
export const opkopenSchema = yup
  .object({
    Voornaam: yup.string().min(0).required("Voornaam is verplicht"),
    Achternaam: yup.string().min(0).required("Achternaam is verplicht"),
    Telefoonnummer: yup.string().min(0).required("Telefoonnummer is verplicht"),
    Opkopen: yup.string().min(0).required("Opkopen is verplicht"),
    Email: yup
      .string()
      .email("E-mail is invalid")
      .required("E-mail is verplicht"),
    Bericht: yup.string().min(0).required("Bericht is verplicht"),
    isAgreeWithPolicy: yup.boolean().required(),
  })
  .required();
export const newsleterSchema = yup
  .object({
    Email: yup
      .string()
      .email("E-mail is invalid")
      .required("E-mail is verplicht"),
    isAgreeWithPolicy: yup.boolean().required(),
  })
  .required();
