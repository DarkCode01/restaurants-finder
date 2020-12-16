import React, { useState, useRef } from "react";
import useStyles from "./Appbar.styles";
import { IconButton, TextField } from "@material-ui/core";
import { Search, FilterList, Close } from "@material-ui/icons";
export default function Appbar({ onSearch, onFilterClick }) {
  const input = useRef();
  const classes = useStyles();
  const [isSearching, setIsSearching] = useState(false);
  const handleSearchClick = () => {
    setIsSearching(!isSearching);
    if (!isSearching) {
      input.current.focus();
    } else {
      input.current.value = "";
      onSearch(input.current);
    }
  };

  return (
    <header className={classes.appbar}>
      <TextField
        inputRef={input}
        className={classes.search + " " + (isSearching ? "" : classes.hidden)}
        variant="outlined"
        onChange={({ target }) => onSearch(target)}
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
