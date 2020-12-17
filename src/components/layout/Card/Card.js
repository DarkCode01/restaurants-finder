import React from "react";
import { KeyboardArrowRight } from "@material-ui/icons";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import Ratter from "../../utils/Ratter";
export default function Card({ restaurant }) {
  const classes = useStyles();
  const history = useHistory();

  const {
    id,
    picture,
    cuisine_type,
    name,
    reviewsAccount,
    rating,
    isOpenAtNow,
  } = restaurant;
  
  return (
    <li
      className={classes.card}
      onClick={() => history.push("/restaurant/" + id)}
    >
      <div className={classes.left}>
        <img
          alt="Restaurant"
          className={classes.picture}
          width="50"
          height="50"
          src={"/images/small/" + picture}
        />
        <span>{cuisine_type}</span>
      </div>
      <div className={classes.middle}>
        <h4 className={classes.title}>{name}</h4>
        <span>
          <Ratter rate={rating} />({reviewsAccount} opinions)
        </span>
        <span
          className={classes.stateLabel}
          style={{ color: isOpenAtNow ? "#00aa66" : "#cc0000" }}
        >
          {isOpenAtNow ? "Open" : "Closed"}
        </span>
      </div>
      <div className={classes.right}>
        <KeyboardArrowRight />
      </div>
    </li>
  );
}
