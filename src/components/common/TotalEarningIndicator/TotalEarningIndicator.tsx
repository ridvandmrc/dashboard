import {
  Stack,
  Typography,
  LinearProgress,
  LinearProgressProps,
} from "@mui/material";
import { ReactNode, FC } from "react";
import { IconBox } from "../IconBox";

interface ITotalEarningIndicatorProps {
  images: ReactNode;
  brand: ReactNode;
  desc: ReactNode;
  valueLabel: ReactNode;
}

export const TotalEarningIndicator: FC<
  ITotalEarningIndicatorProps & LinearProgressProps
> = ({ brand, desc, images, valueLabel, ...props }) => (
  <Stack direction="row" alignItems="center" marginTop="1.5rem">
    <IconBox
      color="info-2"
      padding="0.6rem"
      boxSizing="border-box"
      sx={{
        maxHeight: "2.5rem",
        maxWidth: "2.5rem",
        minWidth: "2.5rem",
        minHeight: "2.5rem",
        boxShadow: "none",
      }}
    >
      {images}
    </IconBox>
    <Stack marginLeft="0.5rem" marginTop="0.1rem">
      <Typography typography="body2" fontWeight="bold">
        {brand}
      </Typography>
      <Typography variant="caption" color="primary.100">
        {desc}
      </Typography>
    </Stack>
    <Stack marginLeft="auto">
      <Typography typography="body2" fontWeight="bold">
        {valueLabel}
      </Typography>
      <LinearProgress color="secondary" variant="determinate" {...props} />
    </Stack>
  </Stack>
);
