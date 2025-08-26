import React from "react";
import "../../css/small.css";
import"../../index.css"

const LoadingSmall = ({size}) => {
  return (
    <div className="load-ct " style={{height:size,width:size}}>
    </div>
  );
};

export default LoadingSmall;
