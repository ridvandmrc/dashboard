import { FC } from "react";
import {
  Stack,
  Avatar,
  Typography,
  TypographyProps,
  AvatarProps,
} from "@mui/material";

const SalesProfit: FC<TypographyProps & { value: number }> = ({ value }) => (
  <Typography
    variant="caption"
    sx={{
      margin: "0.5rem  0 0 0.5rem",
      color: value > 12 ? "success.main" : "error.main",
    }}
  >
    {value > 12 ? "+" : "-"}
    {value}
  </Typography>
);

interface ISalesCountryProps {
  value: string;
  country: string;
  profit: number;
  salesNumber: string;
  countryCode: string;
}

const SaleCountryIndicator: FC<ISalesCountryProps & AvatarProps> = ({
  country,
  countryCode,
  profit,
  salesNumber,
  value,
  ...props
}) => (
  <Stack direction="row" sx={{ marginTop: "1rem" }}>
    <Avatar {...props}>{countryCode}</Avatar>
    <Stack marginLeft="0.8rem" marginTop="0.2rem">
      <Typography>{value}</Typography>
      <Typography variant="caption" fontSize="0.7rem" marginTop="-0.3rem">
        {country}
      </Typography>
    </Stack>
    <SalesProfit value={profit} />
    <Stack marginLeft="auto" marginTop="0.2rem">
      <Typography>{salesNumber}</Typography>
      <Typography variant="caption" fontSize="0.7rem" marginTop="-0.3rem">
        Sales
      </Typography>
    </Stack>
  </Stack>
);

export const SaleCountry = () => (
  <>
    <SaleCountryIndicator
      country="USA"
      countryCode="US"
      profit={25.8}
      salesNumber="894k"
      value="$8,656k"
      sx={{ backgroundColor: "success.main" }}
    />
    <SaleCountryIndicator
      country="England"
      countryCode="UK"
      profit={6.2}
      salesNumber="645k"
      value="$2,415k"
      sx={{ backgroundColor: "error.main" }}
    />
    <SaleCountryIndicator
      country="India"
      countryCode="IN"
      profit={12.4}
      salesNumber="148k"
      value="$856k"
      sx={{ backgroundColor: "warning.main" }}
    />
    <SaleCountryIndicator
      country="Japan"
      countryCode="JA"
      profit={11.9}
      salesNumber="86k"
      value="$745k"
      sx={{ backgroundColor: "grey.500" }}
    />
    <SaleCountryIndicator
      country="Korea"
      countryCode="KO"
      profit={16.2}
      salesNumber="45k"
      value="$45k"
      sx={{ backgroundColor: "error.main" }}
    />
  </>
);
