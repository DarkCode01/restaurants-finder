import React, { useState } from "react";
import useStyles from "./Appbar.styles";
import { IconButton, TextField } from "@material-ui/core";
import { Search, FilterList, Close } from "@material-ui/icons";

export default function Appbar({ onSearch, onFilterClick }) {
  const classes = useStyles();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchClick = () => {
    setIsSearching(!isSearching);
  };

  return (
    <header className={classes.appbar}>
      <TextField
        className={classes.search + " " + (isSearching ? "" : classes.hidden)}
        variant="outlined"
        onChange={onSearch}
        placeholder="Search"
      />
      <h2 className={classes.title + " " + (isSearching ? classes.hidden : "")}>
        Restaurants
      </h2>

      <div>
        <IconButton onClick={handleSearchClick}>
          {isSearching ? <Close /> : <Search />}
        </IconButton>
        <IconButton onClick={onFilterClick}>
          <FilterList />
        </IconButton>
      </div>
    </header>
  );
}
