import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../../../utils/validators/validators'

import classes from './FormsControls.module.css'

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({
  children,
  meta: { touched, error },
}) => {
  const hasError = touched && error
  return (
    <div
      className={classes.formControl + ' ' + (hasError ? classes.error : '')}
    >
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  )
}

export function createField<FormKeysTypes extends string>(
  validate: Array<FieldValidatorType> | undefined,
  placeholder: string | null,
  name: FormKeysTypes,
  component: React.FC<WrappedFieldProps>,
  props = {},
  text = ''
) {
  return (
    <div>
      <Field
        validate={validate}
        placeholder={placeholder}
        name={name}
        component={component}
        {...props}
      />{' '}
      {text}
    </div>
  )
}
export type GetStringKeys<T> = Extract<keyof T, string>
