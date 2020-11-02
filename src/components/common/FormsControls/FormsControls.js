import React from "react";
import { Field } from "redux-form";

import classes from "./FormsControls.module.css";

const FormControl = ({ children, meta: { touched, error } }) => {
  const hasError = touched && error;
  return (
    <div
      className={classes.formControl + " " + (hasError ? classes.error : "")}
    >
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, child, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, child, meta, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  validate,
  placeholder,
  name,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      validate={validate}
      placeholder={placeholder}
      name={name}
      component={component}
      {...props}
    />{" "}
    {text}
  </div>
);
