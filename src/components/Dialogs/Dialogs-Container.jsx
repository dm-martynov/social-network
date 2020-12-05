import { connect } from 'react-redux'
import Dialogs from './Dialogs'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { dialogActions } from '../../redux/dialogs/dialogs.actions'

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (newMessageBody) => {
      dispatch(dialogActions.addNewMessageActionCreator(newMessageBody))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
