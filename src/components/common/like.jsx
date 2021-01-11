import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.isLiked) {
    classes += "-o";
  }

  return (
    <span 
    className={classes} 
    onClick={props.toggleLike}
    style={{cursor:'pointer'}}
    />
    );
}
 
export default Like;