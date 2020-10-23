import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {
  addNewMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
