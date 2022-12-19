import { FC } from "react";
import { Grid } from "@mui/material";
import { Earning, Sales, SellingSummary } from "../contents";
import { CommonTable } from "@/components/common";

export const Layout: FC = () => {
  return (
    <Grid container columns={1} spacing={3}>
      <Grid item sm={1} md={1} lg={1}>
        <SellingSummary />
      </Grid>
      <Grid item sm={1} md={1} lg={1}>
        <Earning />
      </Grid>
      <Grid item sm={1} md={1} lg={1}>
        <Sales />
      </Grid>
      <Grid item sm={1} md={1} lg={1}>
        <CommonTable sx={{ backgroundColor: "white", borderRadius: "0.5rem" }} />
      </Grid>
    </Grid>
  );
};
