import React from "react";
import styles from "./NewPost.module.css";
//import PostForm from "./PostForm";
function NewPost(props) {




  return (
    <div className={styles.allbtns}>
      <button className={styles.btn} onClick={props.onShowForm} >
        New Post
      </button>
      <button className={styles.btn} onClick={props.onShowPost} >Published</button>
    </div>
  );
}

export default NewPost;
