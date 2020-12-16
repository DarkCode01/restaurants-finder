import React from "react";
import { LocationOn } from "@material-ui/icons";
import useStyles from "./styles";
import Ratter from "../../utils/Ratter";

function ImageAppBar({ name, rating, reviewsAccount, isOpenAtNow, address }) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h2>{name}</h2>
        <span>
          <Ratter rate={rating} />
          {reviewsAccount} opinions
        </span>
        <span style={{ color: isOpenAtNow ? "#00aa66" : "#ee0000" }}>
          ( {isOpenAtNow ? "Open" : "Closed"} )
        </span>
        <div>
          <LocationOn /> {address}
        </div>
      </div>
    </div>
  );
}

export default ImageAppBar;
