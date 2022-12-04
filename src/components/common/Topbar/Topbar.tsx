import { FC } from "react";
import { Avatar, IconButton, Stack } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Searchbar } from "../Searchbar";
import { MuiIcons } from "@/assets";

export const Topbar: FC = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    marginBottom="2rem"
  >
    <Searchbar />
    <Stack direction="row">
      <IconButton size="large" sx={{ width: "fit-content" }}>
        <MuiIcons.NightIcon sx={{ color: "primary.main" }} />
      </IconButton>
      <IconButton size="large" sx={{ width: "fit-content" }}>
        <MuiIcons.Notification sx={{ color: "primary.main" }} />
      </IconButton>
      <IconButton>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>RD</Avatar>
      </IconButton>
    </Stack>
  </Stack>
);
