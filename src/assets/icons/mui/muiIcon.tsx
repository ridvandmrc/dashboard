import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ErrorIcon from "@mui/icons-material/Error";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import PaletteIcon from "@mui/icons-material/Palette";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import GridOnIcon from "@mui/icons-material/GridOn";
import HelpIcon from "@mui/icons-material/Help";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export type IconType =
  | "Dashboard"
  | "Settings"
  | "Login"
  | "Register"
  | "Error"
  | "Typography"
  | "Icons"
  | "Card"
  | "Table"
  | "Help"
  | "Search"
  | "Notification"
  | "NightIcon"
  | "More"
  | "Account"
  | "TrendUp"
  | "Device"
  | "Dolar"
  | "BarChart"
  | "BusinessBag"
  | "HelpOutline";

export const MuiIcons: Record<
  IconType,
  OverridableComponent<SvgIconTypeMap<{}, "svg">>
> = {
  Dashboard: DashboardIcon,
  Settings: SettingsIcon,
  Login: LoginIcon,
  Register: HowToRegIcon,
  Error: ErrorIcon,
  Typography: AbcIcon,
  Icons: PaletteIcon,
  Table: GridOnIcon,
  Card: CreditCardIcon,
  Help: HelpIcon,
  Search: SearchIcon,
  Notification: NotificationsNoneIcon,
  NightIcon: NightsStayIcon,
  More: MoreVertIcon,
  Account: PersonOutlineOutlinedIcon,
  TrendUp: TrendingUpOutlinedIcon,
  Device: DevicesOutlinedIcon,
  Dolar: AttachMoneyOutlinedIcon,
  BarChart: BarChartOutlinedIcon,
  BusinessBag: BusinessCenterOutlinedIcon,
  HelpOutline: HelpOutlineOutlinedIcon,
};
