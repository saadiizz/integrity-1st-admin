import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";

const Reusesearch = () => {
  return (
    <div>
      <Box display={"flex"}>
        <Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search Users "
            sx={{
              m: 2,
              color: "#B3C0CD",
              fontFamily: "inter",
              fontSize: "14px",
              fontWeight: "500",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ height: "15px", color: "#B3C0CD" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ m: 1 }}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label"></InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              autoWidth
              sx={{
                color: "#B3C0CD",
                fontFamily: "Roboto",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <MenuItem value="">
                <em>none</em>
              </MenuItem>
              <MenuItem value={10}>Filter By: Phone no</MenuItem>
              <MenuItem value={21}>Filter By: name yup</MenuItem>
              <MenuItem value={22}>Filter By: Phone yup</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};

export default Reusesearch;
