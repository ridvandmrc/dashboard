import { Outlet } from "react-router";
import { Stack } from "@mui/material";
import { Sidebar, Topbar } from "@/components/common";

export const DashboardRouter = () => (
  <Stack direction="row">
    <Sidebar />
    <Stack
      sx={{
        margin: "1.75rem 4vw",
        width: "100%",
      }}
    >
      <Topbar />
      <Outlet />
    </Stack>
  </Stack>
);
