import React, { useEffect, Fragment, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Snackbar } from "@material-ui/core";
import useStyles from "./styles";
import Schedule from "../../components/layout/Schedule/Schedule";
import Review from "../../components/layout/Review/Review";
import ImageAppBar from "../../components/layout/ImageAppBar/ImageAppBar";
import Loading from "../../components/utils/Loading";
import AddFormReview from "../../components/layout/AddReviewForm/AddReviewForm";
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
  const [snackbarIsOpen, setSnackbarIsOpen] = useState(false);

  const classes = useStyles();
  const params = useParams();
  const history = useHistory();

  const sendReview = () => {
    if (review.name && review.comments) {
      addReview(review);
      setReview({ ...review, name: "", comments: "", rating: 5 });
    } else {
      setSnackbarIsOpen(true);
    }
  };

  useEffect(() => {
    fetchRestaurant(params.id);
  }, []);

  return !isLoading && restaurant ? (
    <Fragment>
      <ImageAppBar
        name={restaurant.name}
        rating={restaurant.rating}
        reviewsAccount={restaurant.reviewsAccount}
        isOpenAtNow={restaurant.isOpenAtNow}
        address={restaurant.address}
        goBack={() => {
          history.replace("/");
        }}
      />
      <Container>
        <Schedule schedule={restaurant.schedule} />

        <h3>Reviews from our customers</h3>
        <div className={classes.reviews}>
          {restaurant.reviews.map((review, index) => {
            return <Review key={index} review={review} />;
          })}
        </div>
        <AddFormReview
          review={review}
          setReview={setReview}
          sendReview={sendReview}
        />
      </Container>
      <Snackbar
        open={snackbarIsOpen}
        color="#333"
        autoHideDuration={5000}
        onClose={() => setSnackbarIsOpen(false)}
        message="Please fill required fields"
      ></Snackbar>
    </Fragment>
  ) : (
    <Loading />
  );
}
