import React from "react";
import Star from "../icons/star.svg";
import Arrow from '../icons/arrow_right.svg';
import useStyles from "./Card.styles";
export default function ({ restaurant }) {
  const classes = useStyles();
  return (
    <li className={classes.card}>
      <div className={classes.left}>
          <img className={classes.picture} width="50" height="50" src={'/images/small/' + restaurant.picture}/>
          <span>{restaurant.cuisine_type}</span>
      </div>
      <div className={classes.middle}>
        <h4 className={classes.title}>{restaurant.name}</h4>
        <span className={classes.rating}>
          {restaurant.rating.toFixed(1)}
          <img width="16" height="16" src={Star} />
          {restaurant.reviewsAccount}(opinions)
        </span>
        <span className={classes.stateLabel} style={{color: restaurant.isOpenAtNow? '#00aa66' : '#cc0000'}}>{restaurant.isOpenAtNow? 'Open' : 'Closed'}</span>
      </div>
      <div className={classes.right}>
        <img src={Arrow}/>
      </div>
    </li>
  );
}
