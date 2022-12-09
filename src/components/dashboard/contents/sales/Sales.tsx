import { FC, ReactNode } from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { GenericCard, SaleCountry } from "@/components/common";
import { SalesIcons } from "@/assets";

const Title: FC<{ children: ReactNode }> = ({ children }) => (
  <Stack
    width={1}
    direction="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <Typography variant="h6" color="grey.500">
      {children}
    </Typography>
    <Typography>View All</Typography>
  </Stack>
);

interface IExportSalesItemProps {
  icon: ReactNode;
  title: ReactNode;
  subTitle: ReactNode;
  value: number;
}
const ExportSalesItem: FC<IExportSalesItemProps> = ({
  icon,
  subTitle,
  title,
  value,
}) => (
  <Stack direction="row" width={1} marginTop={3}>
    <Stack sx={{ minWidth: "38px", maxWidth: "38px" }}>{icon}</Stack>
    <Stack direction="column" marginLeft="1rem">
      <Typography>{title}</Typography>
      <Typography variant="caption" color="grey.500" marginTop="-0.3rem">
        {subTitle}
      </Typography>
    </Stack>
    <Typography
      color={value > 0 ? "success.main" : "error.main"}
      marginLeft="auto"
      marginTop={0.4}
    >
      {value > 0 ? "+" : "-"}${value}
    </Typography>
  </Stack>
);

export const Sales = () => (
  <Grid container columns={6} spacing={3} alignItems="stretch">
    <Grid item md={2} lg={2}>
      <GenericCard
        actionsButton
        title="Sales by Country"
        sx={{
          minHeight: "150px",
          height: "100%",
          maxHeight: "calc(100% - 43px)",
        }}
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
          <Stack width={1}>
            <Title>Deposit</Title>
            <Stack marginTop="1rem">
              <ExportSalesItem
                icon={<SalesIcons.Gumroad />}
                subTitle="SELL UI KIT"
                title="Gumroad Account"
                value={4.65}
              />
              <ExportSalesItem
                icon={<SalesIcons.Mastercard />}
                subTitle="Wallet deposit"
                title="Mastercard"
                value={92.705}
              />

              <ExportSalesItem
                icon={<SalesIcons.Stripe />}
                subTitle="iOS Application"
                title="Stripe Account"
                value={957}
              />

              <ExportSalesItem
                icon={<SalesIcons.AmericanBank />}
                subTitle="Bank Transfer"
                title="American Bank"
                value={6.837}
              />

              <ExportSalesItem
                icon={<SalesIcons.CitiBank />}
                subTitle="Wallet Deposit"
                title="Bank Account"
                value={446}
              />
            </Stack>
          </Stack>
          <Divider
            sx={{ minHeight: "370px", margin: "0 1rem" }}
            orientation="vertical"
          />
          <Stack width={1}>
            <Title>Withdraw</Title>
            <Stack marginTop="1rem">
              <ExportSalesItem
                icon={<SalesIcons.Google />}
                subTitle="Paypal deposit"
                title="Google Adsense"
                value={-145}
              />

              <ExportSalesItem
                icon={<SalesIcons.Github />}
                subTitle="Security and Compliance"
                title="Github Enterprise"
                value={-1870}
              />

              <ExportSalesItem
                icon={<SalesIcons.Slack />}
                subTitle="Debit card deposit"
                title="Upgrade Slack Plan"
                value={-450}
              />

              <ExportSalesItem
                icon={<SalesIcons.DigitalOcean />}
                subTitle="Cloud Hosting"
                title="Digital Ocean"
                value={-540}
              />

              <ExportSalesItem
                icon={<SalesIcons.Aws />}
                subTitle="Choosing a Cloud Platform"
                title="AWS Account"
                value={-21}
              />
            </Stack>
          </Stack>
        </Stack>
      </GenericCard>
    </Grid>
  </Grid>
);
