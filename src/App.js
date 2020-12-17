import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RestaurantPage from "./pages/Restaurant/Restaurant";
import Home from "./pages/Home/Home";
import Geo from "geo-nearby";
import { fetchRestaurant, fetchRestaurants } from "./services/api";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [coords, setCoords] = useState();
  const [restaurant, setRestaurant] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: false,
    noFilters: true,
    location: false,
    openNow: false,
    openAt: false,
    openDay: 0,
    distance: 5,
  });

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  const getRestaurant = (id) => {
    setIsLoading(true);
    fetchRestaurant(id)
      .then((restaurant) => {
        setRestaurant(restaurant);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const getRestaurants = () => {
    setIsLoading(true);
    fetchRestaurants()
      .then((restaurants) => {
        setRestaurants(restaurants);
        setFiltered(restaurants);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const onSearch = (target) => {
    const value = target.value;
    const words = value.split(" ");
    setFiltered(
      _filterRestaurants(
        restaurants.filter((restaurant) => {
          if (!value) return true;
          for (let word of words) {
            if (restaurant.lowerName.includes(word) && word) return true;
          }
          return false;
        }),
        filters
      )
    );
  };

  const toogleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const _filterRestaurants = (restaurants, filters) => {
    return restaurants
      .filter((restaurant) => {
        if (filters.openNow && !restaurant.isOpenAtNow) {
          return false;
        } else if (filters.openAt && !restaurant.isOpenAt(filters.openDay)) {
          return false;
        } else if (filters.location && !filterByLocation(restaurant)) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.rating) {
          return b.rating - a.rating;
        }
        return 1;
      });
  };

  const filterByLocation = (restaurant) => {
    if(!coords){
      return 1;
    }
    const data = [
      [restaurant.latlng.lat, restaurant.latlng.lng, restaurant.id],
    ];
    const dataSet = Geo.createCompactSet(data);
    const geo = new Geo(dataSet, { sorted: true });
    const near = geo.nearBy(coords.lat, coords.long, filters.distance * 1000);
    return near.length;
  };

  const saveFilters = (filters) => {
    setFilters(filters);
    setFiltered(_filterRestaurants(restaurants, filters));
    toogleDrawer();
  };

  const addReview = (review) => {
    const r = restaurant.addReview(review);
    setRestaurant(r);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home
            fetchRestaurants={getRestaurants}
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
            fetchRestaurant={getRestaurant}
            addReview={addReview}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
