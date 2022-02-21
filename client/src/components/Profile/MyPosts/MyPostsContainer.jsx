import {addPost, updatePost} from "../../../redux/profileReducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}


const MyPostsContainer = connect(mapStateToProps,{addPost, updatePost})(MyPosts);

export default MyPostsContainer;