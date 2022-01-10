import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div className={classes.MyPosts}>
        <div className={classes.descriptionPost}>My posts</div>
        <div className={classes.postContainer}>
            <textarea className={classes.post} placeholder="Write new post:"></textarea>
            <div className={classes.postButton}>
                <button>Add post</button>
            </div>
        </div>
        <Post
            text="Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?"
            imgUrl="https://ggscore.com/media/logo/t25596.png?64"
            likesCounter="5"
            dislikesCounter="10"
        />
        <Post
            text="Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?"
            imgUrl="https://ggscore.com/media/logo/t25596.png?64"
            likesCounter="52k"
            dislikesCounter="54k"
        />
        <Post
            text="Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?"
            imgUrl="https://ggscore.com/media/logo/t25596.png?64"
            likesCounter="902"
            dislikesCounter="5"
        />
    </div>);
};

export default MyPosts;