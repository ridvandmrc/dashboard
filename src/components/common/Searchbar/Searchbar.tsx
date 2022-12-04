import { MuiIcons } from "@/assets";
import { InputAdornment, TextField } from "@mui/material";

export const Searchbar = () => (
  <TextField
    variant="outlined"
    size="small"
    sx={{ borderRadius: "2rem", maxWidth: "15rem" }}
    InputProps={{
      style: { borderRadius: "1rem" },
      startAdornment: (
        <InputAdornment position="start">
          <MuiIcons.Search />
        </InputAdornment>
      ),
    }}
  ></TextField>
);
