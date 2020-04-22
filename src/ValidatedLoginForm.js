import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}

    //*Ну можно сделать так********/
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Не указана эл. почта.;
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Неправильный адрес эл. почты";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Не указан пароль.";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Пароль слишком короткий - должно быть не менее 8 символов.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Пароль должен содержать цифры.";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email("Некорректная эл. почта")
        .required("Не указана эл. почта."),
      password: Yup.string()
        .required("Не указан пароль.")
        .min(8, "Пароль слишком короткий - должно быть не менее 8 символов.")
        .matches(/(?=.*[0-9])/, "Пароль должен содержать цифры.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            name="email"
            type="text"
            placeholder="Введите эл. почту"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor="email"></label>
          <input
            name="password"
            type="password"
            placeholder="Введите пароль"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Регистрация
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
