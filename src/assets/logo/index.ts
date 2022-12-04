import { DashboardLogo } from "./Dashboard";
import { FC } from "react";

type LogoType = "Dashboard";
export const Logo: Record<LogoType, FC> = {
  Dashboard: DashboardLogo,
};
