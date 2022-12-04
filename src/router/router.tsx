import { FC } from "react";
import { useRoutes } from "react-router";
import { Layout } from "@/components/dashboard";
import { DashboardRouter } from "./dashboard";

export const Routers: FC = () =>
  useRoutes([
    {
      path: "/dashboard",
      element: <DashboardRouter />,
      children: [{ path: "main", element: <Layout /> }],
    },
  ]);
