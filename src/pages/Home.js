import React, { useEffect } from "react";
import Appbar from "../components/Appbar";
import Card from "../components/Card";
import Drawer from "../components/layout/Drawer";
import { Container } from "@material-ui/core";

export default function Home({
  fetchRestaurants,
  onSearch,
  searchText,
  setSearchText,
  drawerIsOpen,
  toogleDrawer,
  filtered,
  saveFilters,
  filters,
}) {
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="App">
      <Appbar onSearch={onSearch} onFilterClick={toogleDrawer}></Appbar>
      <Container>
        {filtered.map((restaurant) => (
          <Card restaurant={restaurant} key={restaurant.id}></Card>
        ))}
        <Drawer
          toogleDrawer={toogleDrawer}
          isOpen={drawerIsOpen}
          saveFilters={saveFilters}
          filters={filters}
        />
      </Container>
    </div>
  );
}
