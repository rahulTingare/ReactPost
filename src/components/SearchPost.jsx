import React from 'react'
import styles from "./Search.module.css";

function SearchPost() {
    const onChange=(e)=>{
        //console.log("hii")
        e.preventDefault();
    }

    return (
    
        <input
          className={styles.search}
          type="search"
          onChange={onChange}
          placeholder="Search by the title ..."
        />
        
      );
}

export default SearchPost