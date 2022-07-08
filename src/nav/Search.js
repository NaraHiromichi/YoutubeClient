import { Input } from "@mui/material";
import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DataContext from "../DataContext";

const Search = () => {
  const { searchDataToFind, setSearchDataToFind, dynamicStyles } =
    useContext(DataContext);
  const [searchData, setSearchData] = useState("");

  const submitSearch = (event) => {
    if (event.key === "Enter") {
      setSearchDataToFind(event.target.value);
      setSearchData("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: dynamicStyles.searchBarWidth,
      }}
    >
      <SearchIcon sx={{ mr: "5px" }} />
      <Input
        type="text"
        value={searchData}
        onKeyPress={(event) => submitSearch(event)}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Search...."
        color="primary"
        sx={{ color: "#ffffff", justifySelf: "flex-end" }}
      />
    </div>
  );
};

export default Search;
