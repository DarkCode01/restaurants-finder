import React from "react";
import useStyles from "./Appbar.styles";

export default function Appbar() {
  const classes = useStyles();
  return (
    <header className={classes.appbar}>
      <h2 className={classes.title}>Restaurants</h2>
    </header>
  );
}
