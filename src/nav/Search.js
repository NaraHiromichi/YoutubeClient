import { Input } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SearchIcon sx={{ mr: "5px" }} />
      <Input
        type="text"
        placeholder="Search...."
        color="primary"
        sx={{ color: "#ffffff", justifySelf: "flex-end" }}
      />
    </div>
  );
};

export default Search;
