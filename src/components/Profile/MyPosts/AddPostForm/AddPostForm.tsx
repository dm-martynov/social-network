import { Field, Form, Formik } from 'formik'
import React from 'react'

const NewPostForm = () => {
  return (
    <Formik
      initialValues={{ postText: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      <Form>
        <Field as='textarea' name='postText' />
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default NewPostForm
