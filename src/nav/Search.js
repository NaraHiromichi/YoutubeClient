import { Input } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [searchData, setSearchData] = useState("");
  console.log(searchData);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SearchIcon sx={{ mr: "5px" }} />
      <Input
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Search...."
        color="primary"
        sx={{ color: "#ffffff", justifySelf: "flex-end" }}
      />
    </div>
  );
};

export default Search;
