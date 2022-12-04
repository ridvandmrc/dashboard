import { FC } from "react";
import { Box, BoxProps } from "@mui/material";

export type ColorType =
  | "secondary"
  | "success"
  | "warning"
  | "primary"
  | "info"
  | "info-2";

const colorMapping: Record<ColorType, string> = {
  warning: "warning.main",
  success: "success.main",
  secondary: "secondary.main",
  primary: "info.main",
  info: "grey.700",
  "info-2": "grey.200",
};

interface IIconBoxProps {
  color: ColorType;
}

export const IconBox: FC<Omit<BoxProps, "color"> & IIconBoxProps> = ({
  children,
  color,
  sx,
  ...props
}) => (
  <Box
    sx={{
      backgroundColor: colorMapping[color],
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "3rem",
      maxWidth: "3rem",
      minHeight: "3rem",
      maxHeight: "3rem",
      borderRadius: "0.4rem",
      boxShadow: "0px 4px 8px -4px rgb(58 53 65 / 42%)",
      ...sx,
    }}
    {...props}
  >
    {children}
  </Box>
);
