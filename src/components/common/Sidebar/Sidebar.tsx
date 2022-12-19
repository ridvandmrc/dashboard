import { FC, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemProps,
  Stack,
  Typography,
} from "@mui/material";
import { Logo, MuiIcons } from "@/assets";

const SideBarListItem: FC<ListItemProps> = ({
  children,
  selected,
  ...props
}) => (
  <ListItem
    {...props}
    sx={{ minHeight: 30, marginTop: 1, color: "primary.main" }}
    selected={selected}
  >
    <ListItemButton>{children}</ListItemButton>
  </ListItem>
);

export const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Stack sx={{ maxWidth: 250, height: "100vh", position: "sticky", top: 0 }}>
      <Stack direction="row" sx={{ margin: "2rem", alignItems: "center" }}>
        <Logo.Dashboard />
        <Typography
          sx={{
            color: "primary.main",
            marginLeft: "1rem",
            whiteSpace: "nowrap",
          }}
        >
          DASHBOARD - RD
        </Typography>
      </Stack>
      <List>
        <SideBarListItem
          onClick={() => setSelectedIndex(0)}
          selected={selectedIndex === 0}
        >
          <ListItemIcon>
            <MuiIcons.Dashboard
              sx={{ color: selectedIndex === 0 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Dashboard
        </SideBarListItem>
        <SideBarListItem
          onClick={() => setSelectedIndex(1)}
          selected={selectedIndex === 1}
        >
          <ListItemIcon>
            <MuiIcons.Settings
              sx={{ color: selectedIndex === 1 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Account Settings
        </SideBarListItem>
        <Divider
          sx={{
            color: "primary.100",
            fontSize: "0.75rem",
            fontWeight: "500",
            margin: "1rem 0",
          }}
          textAlign="left"
        >
          PAGES
        </Divider>
        <SideBarListItem
          onClick={() => setSelectedIndex(2)}
          selected={selectedIndex === 2}
        >
          <ListItemIcon>
            <MuiIcons.Login
              sx={{ color: selectedIndex === 2 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Login
        </SideBarListItem>
        <SideBarListItem
          onClick={() => setSelectedIndex(3)}
          selected={selectedIndex === 3}
        >
          <ListItemIcon>
            <MuiIcons.Register
              sx={{ color: selectedIndex === 3 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Register
        </SideBarListItem>
        <SideBarListItem
          onClick={() => setSelectedIndex(4)}
          selected={selectedIndex === 4}
        >
          <ListItemIcon>
            <MuiIcons.Error
              sx={{ color: selectedIndex === 4 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Error
        </SideBarListItem>
        <Divider
          sx={{
            color: "primary.100",
            fontSize: "0.75rem",
            fontWeight: "500",
            margin: "1rem 0",
          }}
          textAlign="left"
        >
          USER INTERFACE
        </Divider>
        <SideBarListItem
          onClick={() => setSelectedIndex(5)}
          selected={selectedIndex === 5}
        >
          <ListItemIcon>
            <MuiIcons.Dashboard
              sx={{ color: selectedIndex === 5 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Typography
        </SideBarListItem>
        <SideBarListItem
          onClick={() => setSelectedIndex(6)}
          selected={selectedIndex === 6}
        >
          <ListItemIcon>
            <MuiIcons.Icons
              sx={{ color: selectedIndex === 6 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Icons
        </SideBarListItem>
        <SideBarListItem
          onClick={() => setSelectedIndex(7)}
          selected={selectedIndex === 7}
        >
          <ListItemIcon>
            <MuiIcons.Card />
          </ListItemIcon>
          Card
        </SideBarListItem>
        <SideBarListItem
          onClick={() => setSelectedIndex(8)}
          selected={selectedIndex === 8}
        >
          <ListItemIcon>
            <MuiIcons.Table
              sx={{ color: selectedIndex === 8 ? "white" : "primary.main" }}
            />
          </ListItemIcon>
          Table
        </SideBarListItem>
      </List>

      <ListItem sx={{ marginTop: "auto", marginBottom: "2rem" }}>
        <ListItemIcon>
          <MuiIcons.Help sx={{ color: "primary.main" }} />
        </ListItemIcon>
        Help
      </ListItem>
    </Stack>
  );
};
