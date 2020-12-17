import React from "react";
import { LocationOn, ArrowBack } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import useStyles from "./styles";
import Ratter from "../../utils/Ratter";

function ImageAppBar({
  name,
  rating,
  reviewsAccount,
  isOpenAtNow,
  address,
  goBack,
}) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h2>
          <IconButton size="small" onClick={goBack}>
            <ArrowBack className={classes.backIcon}/>
          </IconButton>
          &nbsp;{name}
        </h2>
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
