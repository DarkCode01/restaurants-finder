import React from "react";
import Arrow from "../icons/arrow_right.svg";
import useStyles from "./Card.styles";
import { useHistory } from "react-router-dom";
import Ratter from "./utils/Ratter";
export default function Card({ restaurant }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <li
      className={classes.card}
      onClick={() => history.push("/restaurant/" + restaurant.id)}
    >
      <div className={classes.left}>
        <img
          alt="Restaurant"
          className={classes.picture}
          width="50"
          height="50"
          src={"/images/small/" + restaurant.picture}
        />
        <span>{restaurant.cuisine_type}</span>
      </div>
      <div className={classes.middle}>
        <h4 className={classes.title}>{restaurant.name}</h4>
        <Ratter rate={restaurant.rating} />
        {restaurant.reviewsAccount}(opinions)
        <span
          className={classes.stateLabel}
          style={{ color: restaurant.isOpenAtNow ? "#00aa66" : "#cc0000" }}
        >
          {restaurant.isOpenAtNow ? "Open" : "Closed"}
        </span>
      </div>
      <div className={classes.right}>
        <img src={Arrow} alt="Next Arrow" />
      </div>
    </li>
  );
}
