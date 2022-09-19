//import React,{useState} from "react";
//import NewPost from "./NewPost";
import{useRef} from 'react';
import classes from "./PostForm.module.css";
import allPostDemo from "./postData";



function PostForm() {

 
  

  const titleInputRef=useRef();
  const textInputRef=useRef();

  let confirmHandler=(e)=>{
  e.preventDefault();
    
    const enteredTitle=titleInputRef.current.value;
    const enteredText=textInputRef.current.value;
      
    allPostDemo.push({
      title:enteredTitle,
      text:enteredText
    })
    
    console.log(allPostDemo)
    
    
  }

  

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div>
        <input  type="text" className={classes.title} placeholder="Title" ref={titleInputRef} />
      </div>
      <div>
        <textarea className={classes.title} cols="50" rows="4" placeholder="Text" ref={textInputRef}></textarea>
      </div>
      <button className={classes.btn}  >Publish</button>
    </form>
  );
}

export default PostForm;
