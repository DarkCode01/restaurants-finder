import React, { useEffect, useState } from "react";
import Restaurant from "./models/Restaurant";
import "./App.css";
import axios from "axios";
import Appbar from "./components/Appbar";
import Card from "./components/Card";
import {
  Container,
  Drawer,
  ListItem,
  Divider,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Done } from "@material-ui/icons";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    rating: false,
    location: false,
    openNow: false,
  });
  useEffect(() => {
    (async function fetch() {
      try {
        const response = await axios.get("api/restaurant-data.json");
        const data = response.data.restaurants;
        const restaurants = data.map(
          (restaurant) => new Restaurant(restaurant)
        );

        setRestaurants(restaurants);
        setFiltered(restaurants);
      } catch (err) {
        console.log(err);
      }
      console.log("loading");
    })();
  }, []);

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

  return (
    <div className="App">
      <Appbar onSearch={onSearch} onFilterClick={toogleDrawer}></Appbar>
      <Container>
        {filtered.map((restaurant) => (
          <Card restaurant={restaurant} key={restaurant.id}></Card>
        ))}

        <Drawer
          onClose={() => {
            setDrawerIsOpen(false);
          }}
          anchor="bottom"
          variant="temporary"
          open={drawerIsOpen}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5 style={{ paddingLeft: "8px" }}>Order by</h5>
            <IconButton
              onClick={() => {
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
                setDrawerIsOpen(false);
              }}
            >
              <Done/>
            </IconButton>
          </div>
          <ListItem>
            <Checkbox
              checked={filters.rating}
              onChange={(e, checked) => {
                setFilters({ ...filters, rating: checked });
              }}
            />
            Rating
          </ListItem>
          <ListItem>
            <Checkbox
              checked={filters.location}
              onChange={(e, checked) => {
                setFilters({ ...filters, location: checked });
              }}
            />
            Location
          </ListItem>
          <Divider />
          <h5 style={{ paddingLeft: "8px" }}>Filter by</h5>
          <ListItem>
            <Checkbox
              checked={filters.openNow}
              onChange={(e, checked) => {
                setFilters({ ...filters, openNow: checked });
              }}
            />
            Open now
          </ListItem>
        </Drawer>
      </Container>
    </div>
  );
}

export default App;
