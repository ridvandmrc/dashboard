import { FC } from "react";
import { Button, Grid, Typography, Stack, SvgIconTypeMap } from "@mui/material";
import { ColorType, GenericCard, IconBox } from "@/components/common";
import { MuiIcons, PageImages } from "@/assets";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface IStaticCardItemProps {
  color: ColorType;
  title: string;
  value: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const StaticCardsItem: FC<IStaticCardItemProps> = ({
  color,
  title,
  value,
  Icon,
}) => (
  <Stack direction="row">
    <IconBox color={color}>
      <Icon sx={{ color: "white" }} />
    </IconBox>
    <Stack marginLeft="0.5rem" marginTop="0.2rem">
      <Typography variant="caption">{title}</Typography>
      <Typography variant="h6" marginTop="-0.3rem">
        {value}
      </Typography>
    </Stack>
  </Stack>
);

export const SellingSummary = () => (
  <Grid container columns={3} spacing={3}>
    <Grid item sm={3} md={1} lg={1}>
      <GenericCard
        title="Congragulations Jhon! 🥳"
        sx={{ minHeight: "150px", maxHeight: "150px" }}
      >
        <Typography variant="caption" color="primary.main" marginTop="-1rem">
          Best Seller of the mounth
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack>
            <Typography variant="h5" color="secondary.main" marginTop="auto">
              $42.8K
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: "auto" }}
              size="small"
            >
              View Sales
            </Button>
          </Stack>
          <Stack
            sx={{
              width: "25%",
              MaxHeight: "150px",
              maxWidth: "75px",
              marginRight: "2rem",
            }}
          >
            <PageImages.Trophy />
          </Stack>
        </Stack>
      </GenericCard>
    </Grid>
    <Grid item sm={3} md={2} lg={2}>
      <GenericCard
        title="Statics Card"
        actionsButton
        sx={{ minHeight: "150px", maxHeight: "150px" }}
      >
        <Typography variant="caption" color="primary.main" marginTop="-1rem">
          <strong>Total 48.5% growth</strong> 😎 this month
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          maxWidth="90%"
          marginTop="2rem"
        >
          <StaticCardsItem
            Icon={MuiIcons.TrendUp}
            color="secondary"
            title="Sales"
            value="245K"
          />
          <StaticCardsItem
            Icon={MuiIcons.Account}
            color="success"
            title="Customers"
            value="12.5K"
          />
          <StaticCardsItem
            Icon={MuiIcons.Device}
            color="warning"
            title="Products"
            value="1.54K"
          />
          <StaticCardsItem
            Icon={MuiIcons.Dolar}
            color="primary"
            title="Revenue"
            value="$88K"
          />
        </Stack>
      </GenericCard>
    </Grid>
  </Grid>
);
