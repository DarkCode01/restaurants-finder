import React, { useState } from "react";
import Restaurant from "./models/Restaurant";
import RestaurantPage from "./pages/Restaurant/Restaurant";
import "./App.css";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: false,
    location: false,
    openNow: false,
  });

  const fetchRestaurants = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/restaurant-data.json");
      const data = response.data.restaurants;
      const restaurants = data.map((restaurant) => new Restaurant(restaurant));

      setRestaurants(restaurants);
      setFiltered(restaurants);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchRestaurant = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/restaurant-data.json");
      const data = response.data.restaurants;
      const restaurant = new Restaurant(
        data.find((r) => r.id.toString() === id)
      );
      setRestaurant(restaurant);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onSearch = (event) => {
    const value = event.target.value;
    const words = value.split(" ");
    setFiltered(
      restaurants.filter((restaurant) => {
        if (!value) return true;
        for (let word of words) {
          if (restaurant.lowerName.includes(word) && word) return true;
        }
        return false;
      })
    );
  };

  const toogleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const saveFilters = (filters) => {
    setFilters(filters);
    setFiltered(
      restaurants
        .filter((restaurant) => {
          if (filters.openNow && !restaurant.isOpenAtNow) {
            return false;
          }
          return true;
        })
        .sort((a, b) => {
          if (filters.rating) {
            return b.rating - a.rating;
          }
          return 1;
        })
    );
    toogleDrawer();
  };

  const addReview = (review) => {
    const r =restaurant.addReview(review);
    setRestaurant(r);
    console.log('sete')
  };
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            fetchRestaurants={fetchRestaurants}
            onSearch={onSearch}
            toogleDrawer={toogleDrawer}
            saveFilters={saveFilters}
            drawerIsOpen={drawerIsOpen}
            filtered={filtered}
            filters={filters}
          />
        </Route>
        <Route path="/restaurant/:id">
          <RestaurantPage
            isLoading={isLoading}
            restaurant={restaurant}
            fetchRestaurant={fetchRestaurant}
            addReview={addReview}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
