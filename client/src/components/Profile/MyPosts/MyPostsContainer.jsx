import {addPostAC, updatePostAC} from "../../../redux/profileReducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        updateNewPostText: (text) => {dispatch(updatePostAC(text))},
    }

}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;