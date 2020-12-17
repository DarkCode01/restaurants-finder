import React from "react";
import { CircularProgress } from "@material-ui/core";
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "98vh",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loading;
