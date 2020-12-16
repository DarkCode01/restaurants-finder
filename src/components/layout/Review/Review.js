import React from "react";
import useStyles from "./styles";
import Ratter from '../../utils/Ratter';
function Review({ review }) {
  const { name, rating, comments, date } = review;
  const classes = useStyles();
  return (
    <div className={classes.review}>
      <div>
        <h4>{name}</h4>
        <Ratter rate={rating} />
      </div>
      <p>{comments.substring(0, Math.min(comments.length, 130))}...</p>
      <span>{date}</span>
    </div>
  );
}

export default Review;
