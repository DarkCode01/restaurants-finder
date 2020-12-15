import React, { useEffect, useState } from "react";
import Restaurant from "./models/Restaurant";
import "./App.css";
import axios from "axios";
import Appbar from "./components/Appbar";
import Card from "./components/Card";
import { Container } from "@material-ui/core";
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  useEffect(async () => {
    try {
      const response = await axios.get("api/restaurant-data.json");
      const data = response.data.restaurants;
      const restaurants = data.map((restaurant) => new Restaurant(restaurant));

      setRestaurants(restaurants);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onSearch = (event) => {
    const value = event.target.value;
    const words = value.split(" ");
    setFiltered(
      restaurants.filter((restaurant) =>{
        for(let word of words){
          if(restaurant.lowerName.includes(word) && word)
            return true;
        }
        return false;
      })
    );
    setSearchText(value);
  };

  const results = searchText != "" ? filtered : restaurants;

  return (
    <div className="App">
      <Appbar onSearch={onSearch}></Appbar>
      <Container>
        {results.map((restaurant) => (
          <Card restaurant={restaurant} key={restaurant.id}></Card>
        ))}
      </Container>
    </div>
  );
}

export default App;
