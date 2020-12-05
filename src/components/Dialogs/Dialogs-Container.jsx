import { connect } from 'react-redux'
import Dialogs from './Dialogs'

import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { addNewMessageActionCreator } from '../../redux/dialogs/dialogs.actions'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (newMessageBody) => {
      dispatch(addNewMessageActionCreator(newMessageBody))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
