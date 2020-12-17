import axios from "axios";
import Restaurant from "../schemas/Restaurant";

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get("/api/restaurant-data.json");
    const data = response.data.restaurants;
    const restaurants = data.map((restaurant) => new Restaurant(restaurant));
    return restaurants;
  } catch (err) {
    console.log(err);
  }
};

export const fetchRestaurant = async (id) => {
  try {
    const response = await axios.get("/api/restaurant-data.json");
    const data = response.data.restaurants;
    const restaurant = new Restaurant(data.find((r) => r.id.toString() === id));
    
    return restaurant;
  } catch (err) {
    console.log(err);
  }
};
