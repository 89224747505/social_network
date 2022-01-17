import {addMessageCreator, updateNewMessageCreator} from "../../redux/reduxStore";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialog: state.dialogPage,
        message: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageCreator())},
        updateMessageOnChange: (text) => {dispatch(updateNewMessageCreator(text))},
    }

}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;