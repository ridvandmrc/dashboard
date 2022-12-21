import {
  Grid,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MuiIcons, PageImages } from "@/assets";
import {
  GenericCard,
  ProfitCard,
  TotalEarningIndicator,
} from "@/components/common";
import { Chart } from "../../chart";

export const Earning = () => {
  const theme = useTheme();
  const large = useMediaQuery(theme.breakpoints.down("lg"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  console.log("large: ", large);
  console.log("medium: ", medium);
  return (
    <Grid container columns={6} spacing={3}>
      <Grid item sm={6} md={3} lg={2}>
        <GenericCard
          title="Weekly Overview"
          actionsButton
          sx={{
            minHeight: "150px",
            height: "100%",
            maxHeight: "calc(100% - 43px)",
          }}
        >
          <Chart />
          <Stack marginTop={2} direction="row" alignItems="center">
            <Typography variant="h5">45%</Typography>
            <Typography marginLeft={1} variant="caption">
              Your sales performance is 45% 😎 better compared to last month
            </Typography>
          </Stack>
          <Button sx={{ marginTop: 2 }} variant="contained" color="secondary">
            Details
          </Button>
        </GenericCard>
      </Grid>
      <Grid item sm={6} md={3} lg={2}>
        <GenericCard
          title="Total Earning"
          actionsButton
          sx={{
            minHeight: "150px",
            height: "100%",
            maxHeight: "calc(100% - 43px)",
          }}
        >
          <Typography variant="h4" position="relative">
            $24,895 &nbsp;
            <Typography
              variant="caption"
              sx={{ fontSize: "1rem", position: "absolute" }}
              color="success.main"
            >
              + 10%
            </Typography>
          </Typography>
          <Typography
            variant="caption"
            color="primary.100"
            sx={{ marginTop: "0.5rem" }}
          >
            Compared to $84,325 last year
          </Typography>
          <Stack marginTop="1rem">
            <TotalEarningIndicator
              brand="Zipcar"
              desc="Vuejs, React & HTML"
              images={<PageImages.Zipcar />}
              value={75}
              valueLabel="$24,895.65"
            />
            <TotalEarningIndicator
              brand="Bitbank"
              desc="Sketch, Figma & XD"
              images={<PageImages.Bitbank />}
              value={50}
              valueLabel="$80,650.20"
              color="info"
            />
            <TotalEarningIndicator
              brand="Aviato"
              desc="HTML & Angular"
              images={<PageImages.Avito />}
              value={25}
              valueLabel="$10,245.80"
              color="error"
            />
          </Stack>
        </GenericCard>
      </Grid>
      <Grid item xs={4} sm={6} md={6} lg={2}>
        <Grid container columns={6} spacing={3}>
          <Grid item sm={3} md={3} lg={3}>
            <ProfitCard
              color="success"
              label="Total Profit"
              value="$25.6K"
              desc="Weekly Profit"
              ratio="+49%"
            >
              <MuiIcons.BarChart sx={{ color: "white" }} />
            </ProfitCard>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <ProfitCard
              color="info"
              label="Refunds"
              value="$78"
              desc="Past Month"
              ratio="-15%"
            >
              <MuiIcons.Dolar sx={{ color: "white" }} />
            </ProfitCard>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <ProfitCard
              color="secondary"
              desc="Yearly Project"
              label="New Project"
              ratio="-18%"
              value="862"
            >
              <MuiIcons.BusinessBag sx={{ color: "white" }} />
            </ProfitCard>
          </Grid>
          <Grid item sm={3} md={3} lg={3}>
            <ProfitCard
              color="warning"
              desc="Last Week"
              label="Sales Queries"
              ratio="-18%"
              value="15"
            >
              <MuiIcons.HelpOutline sx={{ color: "white" }} />
            </ProfitCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
