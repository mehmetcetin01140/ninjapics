import React from "react";

export default function Best() {
  return (
    <div className="best mt-2">
      <div className="bestGifArea">
        <img
          src={require("../images/crown.gif")}
          alt="NinjaPics"
          className="crown"
        ></img>
      </div>
      <div className="bestImageArea">
        <img src={require("../images/best.jpg")} alt="NinjaPics"></img>
      </div>
    </div>
  );
}
