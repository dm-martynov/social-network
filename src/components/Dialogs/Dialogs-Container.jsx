import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addNewMessageActionCreator } from "../../redux/dialogs-reducer";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewMessage: (newMessageBody) => {
      dispatch(addNewMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
