import React, { Fragment, useEffect } from "react";
import Appbar from "../../components/layout/AppBar/AppBar";
import Card from "../../components/layout/Card/Card";
import Drawer from "../../components/layout/Drawer/Drawer";
import { Container } from "@material-ui/core";

export default function Home({
  fetchRestaurants,
  onSearch,
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
    <Fragment>
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
    </Fragment>
  );
}
