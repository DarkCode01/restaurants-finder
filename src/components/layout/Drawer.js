import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  IconButton,
  ListItem,
  Divider,
  Checkbox,
} from "@material-ui/core";
import { Done } from "@material-ui/icons";

export default function Drawer({ toogleDrawer, isOpen, saveFilters, filters }) {
  const [localFilters, setLocalFilters] = useState(filters);
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
        <Checkbox
          checked={localFilters.openNow}
          onChange={(e, checked) => {
            setLocalFilters({ ...localFilters, openNow: checked });
          }}
        />
        Open now
      </ListItem>
    </MUIDrawer>
  );
}
