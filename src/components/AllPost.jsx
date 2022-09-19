//import React,{useState} from "react";
 import allPostDemo from "./postData";
function AllPost() {




  const post=  allPostDemo.map((post)=>{
    return (
        <div>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
        </div>
    )
 })
 
 return(
    <>
        <div>{post}</div>
    </>
 )
 
}

export default AllPost;
