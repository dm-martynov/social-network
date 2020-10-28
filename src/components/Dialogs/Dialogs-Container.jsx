import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addNewMessage: () => {
      dispatch(addNewMessageActionCreator());
    },
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
