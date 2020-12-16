import React, { useEffect, Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CircularProgress,
  TextField,
  Slider,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import Schedule from "../../components/layout/Schedule/Schedule";
import Review from "../../components/layout/Review/Review";
import ImageAppBar from "../../components/layout/ImageAppBar/ImageAppBar";

export default function Restaurant({
  isLoading,
  fetchRestaurant,
  restaurant,
  addReview,
}) {
  const [review, setReview] = useState({
    name: "",
    comments: "",
    rating: 5,
    date: new Date().toLocaleDateString(),
  });
  const classes = useStyles();
  const params = useParams();

  useEffect(() => {
    fetchRestaurant(params.id);
  }, []);

  return !isLoading && restaurant? (
    <Fragment>
      <ImageAppBar
        name={restaurant.name}
        rating={restaurant.rating}
        reviewsAccount={restaurant.reviewsAccount}
        isOpenAtNow={restaurant.isOpenAtNow}
        address={restaurant.address}
      />
      <Container>
        <Schedule schedule={restaurant.schedule} />
        <h3>Reviews from our customers</h3>
        <div className={classes.reviews}>
          {restaurant.reviews.map((review, index) => {
            return <Review key={index} review={review} />;
          })}
        </div>

        <div>
          <h3>Let us now how great was your experince with us</h3>
          <p>
            Please comment about everything that keep your attentions in our
            restaurant, was a good experience? exelent, was not so good? no
            problem, tell us what can we do to offer the best service for you.
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
              onClick={() => {
                addReview(review);
              }}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    </Fragment>
  ) : (
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
