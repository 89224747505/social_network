import {addMessageAC, updateMessageAC} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "lodash/fp/compose";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);