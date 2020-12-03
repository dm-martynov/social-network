import React from 'react'
import { connect, Provider } from 'react-redux'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import './App.css'
import Preloader from './components/common/preloader/preloader'

import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import UsersContainer from './components/Users/UsersContainer'
import { withSuspense } from './hoc/withSuspense'
import { initializeApp } from './redux/app/app.reducer'
import store from './redux/store'

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/Dialogs-Container')
)
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
)

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
          <Route
            path='/profile/:userId?'
            render={withSuspense(ProfileContainer)}
          />
          <Route exact path='/users' render={() => <UsersContainer />} />
          <Route exact path='/login' render={() => <Login />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp
