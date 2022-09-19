import AllPost from "./components/AllPost";
import NewPost from "./components/NewPost";
import PostForm from "./components/PostForm";
import SearchPost from "./components/SearchPost";
import React,{useState} from "react";
import './App.css'

function App() {

  const  [inputFormIsShown,setInputFormIsShown]=useState(false);
  const  [postIsShown,postIsShownShown]=useState(false);
  
  const showFormHandler=()=>{
    setInputFormIsShown(true);
    console.log("pckw");
  }
  
  const showPostHandler=()=>{
    postIsShownShown(true);
    console.log("pckw");
  }
  
  
  //const hideFormHandler=()=>{
  //  setInputFormIsShown(false);
  //}
  
  return (
    <div>
    <SearchPost/>
    <NewPost onShowForm={showFormHandler}  onShowPost={showPostHandler}/>
    <div className="post-Box">
    {inputFormIsShown && <PostForm/>}
    { postIsShown && <AllPost/>}
    </div>
    
    </div>
  );
}

export default App;

