import {addMessageAC, updateMessageAC} from "../../redux/messageReducer";
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
        addMessage: () => {dispatch(addMessageAC())},
        updateMessageOnChange: (text) => {dispatch(updateMessageAC(text))},
    }

}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;