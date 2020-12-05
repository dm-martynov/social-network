import React from 'react'
import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import {
  createField,
  GetStringKeys,
  Input,
} from '../common/FormsControls/FormsControls'

import { Redirect } from 'react-router-dom'
import classes from '../../components/common/FormsControls/FormsControls.module.css'
import { login } from '../../redux/auth/auth.thunks'
import { AppStateType } from '../../redux/rootReducer'

type LoginFormOwnProps = {
  captchaUrl: string | null
}

export type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}
type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField<LoginFormValuesTypeKeys>(
        [required],
        'Email',
        'email',
        Input
      )}
      {createField([required], 'Password', 'password', Input, {
        type: 'password',
      })}
      {createField(
        undefined,
        null,
        'rememberMe',
        Input,
        { type: 'checkbox' },
        'rememberMe'
      )}
      {captchaUrl && <img alt='captcha' src={captchaUrl} />}
      {captchaUrl &&
        createField([required], 'Symbols from image', 'captcha', Input)}

      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
  form: 'login',
})(LoginForm)

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean | null
}
type MapDispatchPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: any) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
  }
  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login)
