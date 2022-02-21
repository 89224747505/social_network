import {addMessage, updateMessage} from "../../redux/messageReducer.ts";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "lodash/fp/compose";

let mapStateToProps = (state) => {
    return {
        dialog: state.dialogPage.dialogs,
        message: state.messagePage,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateMessage}),
    withAuthRedirect
)(Dialogs);