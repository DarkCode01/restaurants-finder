import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  IconButton,
  ListItem,
  Divider,
  Checkbox,
  Select,
  MenuItem,
  Radio,
} from "@material-ui/core";
import { Done } from "@material-ui/icons";

export default function Drawer({ toogleDrawer, isOpen, saveFilters, filters }) {
  const [localFilters, setLocalFilters] = useState(filters);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurtsday",
    "Friday",
    "Saturday",
  ];
  return (
    <MUIDrawer
      onClose={() => {
        setLocalFilters(filters);
        toogleDrawer();
      }}
      anchor="bottom"
      variant="temporary"
      open={isOpen}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5 style={{ paddingLeft: "8px" }}>Order by</h5>
        <IconButton onClick={() => saveFilters(localFilters)}>
          <Done />
        </IconButton>
      </div>
      <ListItem>
        <Checkbox
          checked={localFilters.rating}
          onChange={(_, checked) => {
            setLocalFilters({ ...localFilters, rating: checked });
          }}
        />
        Rating
      </ListItem>
      <Divider />
      <h5 style={{ paddingLeft: "8px" }}>Filter by</h5>
      <ListItem>
        <Radio
          checked={localFilters.noFilters}
          onChange={(_, checked) => {
            setLocalFilters({
              ...localFilters,
              noFilters: checked,
              location: false,
              openNow: false,
              openAt: false,
            });
          }}
        />
        No Filters
      </ListItem>
      <ListItem>
        <Radio
          checked={localFilters.location}
          onChange={(_, checked) => {
            setLocalFilters({
              ...localFilters,
              location: checked,
              noFilters: false,
              openNow: false,
              openAt: false,
            });
          }}
        />
        Range of &nbsp;
        <Select
          value={localFilters.distance}
          onChange={(event) => {
            setLocalFilters({
              ...localFilters,
              distance: event.target.value,
            });
          }}
        >
          {[5,10,20,25,30,40,50,60,70,80,90,100].map((distance, index) => (
            <MenuItem key={index} value={distance}>
              {distance}
            </MenuItem>
          ))}
        </Select>
        KM
      </ListItem>
      <ListItem>
        <Radio
          checked={localFilters.openNow}
          onChange={(e, checked) => {
            setLocalFilters({
              ...localFilters,
              openNow: checked,
              noFilters: false,
              location: false,
              openAt: false,
            });
          }}
        />
        Open now
      </ListItem>
      <ListItem>
        <Radio
          checked={localFilters.openAt}
          onChange={(e, checked) => {
            setLocalFilters({
              ...localFilters,
              openNow: false,
              noFilters: false,
              location: false,
              openAt: checked,
            });
          }}
        />{" "}
        Open At &nbsp;
        <Select
          value={localFilters.openDay}
          onChange={(event) => {
            setLocalFilters({
              ...localFilters,
              openDay: event.target.value,
            });
          }}
        >
          {weekDays.map((day, index) => (
            <MenuItem key={index} value={index.toString()}>
              {day}
            </MenuItem>
          ))}
        </Select>
      </ListItem>
    </MUIDrawer>
  );
}
