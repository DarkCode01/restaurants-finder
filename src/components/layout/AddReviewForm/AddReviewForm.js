import React from "react";
import useStyles from "./styles";
import { Slider, TextField, Button } from "@material-ui/core";
function AddReviewForm({ review, setReview, sendReview }) {
  const classes = useStyles();
  return (
    <div>
      <h3>Let us now how great was your experience with us</h3>
      <p>
        Please comment about everything that keep your attentions in our
        restaurant, was a good experience? exelent, was not so good? no problem,
        tell us what can we do to offer the best service for you.
      </p>

      <form className={classes.form}>
        <span>Stars</span>
        <Slider
          defaultValue={review.stars || 5}
          onChange={(_, value) =>
            setReview({ ...review, rating: parseInt(value) })
          }
          max={5}
          min={1}
          step={1}
          valueLabelDisplay="on"
        />
        <TextField
          label="Name"
          value={review.name}
          onChange={({ target }) =>
            setReview({ ...review, name: target.value })
          }
        />
        <TextField
          label="Comment"
          multiline
          value={review.comments}
          onChange={({ target }) =>
            setReview({ ...review, comments: target.value })
          }
        />
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={sendReview}
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default AddReviewForm;
