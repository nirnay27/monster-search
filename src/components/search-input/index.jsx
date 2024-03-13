import { useState } from "react";
import "./index.css";
import TextField from "@mui/material/TextField";
const SearchInput = ({ handleChange }) => {
  // func(data)
  //  console.log(data)

  return (
    <div>
      {/* <input className="search-box" name="search" type="search" placeholder="search Monsters" onChange={(e)=>handleChange(e)}/> */}
      <TextField
        id="search-box"
        label="Search-Monsters"
        variant="outlined"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchInput;
