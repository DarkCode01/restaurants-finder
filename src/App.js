import React, {useEffect, useState} from 'react';
import Restaurant from './models/Restaurant';
import './App.css';
import axios from 'axios';
import Appbar from './components/Appbar';
import Card from './components/Card';
import {Container} from '@material-ui/core'
function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(async()=>{
    try{
      const response = await axios.get('api/restaurant-data.json');
      const data = response.data.restaurants;
      const restaurants = data.map((restaurant)=> new Restaurant(restaurant));

      setRestaurants(restaurants);

    } catch(err){
     console.log(err);
    }
  }, []);
  return (
    <div className="App">
      <Appbar></Appbar>
      <Container>
      {restaurants.map((restaurant)=><Card restaurant={restaurant} key={restaurant.id}></Card>)}
      </Container>
      
    </div>
  );
}

export default App;
