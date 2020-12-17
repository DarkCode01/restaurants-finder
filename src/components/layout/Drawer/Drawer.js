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
      onClose={toogleDrawer}
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
      <ListItem>
        <Checkbox
          checked={localFilters.location}
          onChange={(e, checked) => {
            setLocalFilters({ ...setLocalFilters, location: checked });
          }}
        />
        Location
      </ListItem>
      <Divider />
      <h5 style={{ paddingLeft: "8px" }}>Filter by</h5>
      <ListItem>
        <Radio
          checked={localFilters.openNow}
          onChange={(e, checked) => {
            setLocalFilters({
              ...localFilters,
              openNow: checked,
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
              openAt: checked,
            });
          }}
        />{" "}
        Open At &nbsp;
        <Select value={localFilters.openDay} onChange={(event)=>{
          setLocalFilters({
            ...localFilters,
            openDay: event.target.value
          })
        }}>
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
