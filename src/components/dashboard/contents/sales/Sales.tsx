import { Divider, Grid, Stack } from "@mui/material";
import { GenericCard, SaleCountry } from "@/components/common";

export const Sales = () => (
  <Grid container columns={6} spacing={3}>
    <Grid item md={2} lg={2}>
      <GenericCard
        actionsButton
        title="Sales by Country"
        sx={{ minHeight: "150px" }}
      >
        <SaleCountry />
      </GenericCard>
    </Grid>
    <Grid item md={4} lg={4}>
      <GenericCard title="" sx={{ minHeight: "150px" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ minHeight: "150px" }}
        >
          <Stack>item1</Stack>
          <Divider sx={{ minHeight: "150px" }} orientation="vertical" />
          <Stack>item1</Stack>
        </Stack>
      </GenericCard>
    </Grid>
  </Grid>
);
