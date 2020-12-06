import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators'
import { createField, Textarea } from '../../common/FormsControls/FormsControls'
import { NewMessageFormValuesType } from '../Dialogs'

const maxLength50 = maxLengthCreator(50)

type NewMessageFormValuesKeysType = Extract<
  keyof NewMessageFormValuesType,
  string
>

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType>> = (
  props
) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<NewMessageFormValuesKeysType>(
          [required, maxLength50],
          'Enter your message',
          'newMessageBody',
          Textarea
        )}
      </div>

      <div>
        <button>Add message</button>
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm)
