import { connect } from 'react-redux'
import Dialogs from './Dialogs'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { dialogActions } from '../../redux/dialogs/dialogs.actions'
import { AppStateType } from '../../redux/rootReducer'

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { addNewMessage: dialogActions.addMessage }),
  withAuthRedirect
)(Dialogs)
