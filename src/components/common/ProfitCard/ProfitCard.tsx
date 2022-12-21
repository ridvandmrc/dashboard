import { ReactNode, FC } from "react";
import { Typography } from "@mui/material";
import { GenericCard } from "../Card";
import { ColorType, IconBox } from "../IconBox";

interface IProfitCardProps {
  label?: ReactNode;
  value?: string;
  ratio?: string;
  desc?: string;
  children: ReactNode;
  color: ColorType;
}

export const ProfitCard: FC<IProfitCardProps> = ({
  children,
  label,
  value,
  desc,
  ratio,
  color,
}) => (
  <GenericCard
    actionsButton
    sx={{ boxSizing: "border-box" }}
    title={
      <IconBox
        color={color}
        sx={{
          borderRadius: "50%",
          minWidth: "2.4rem",
          maxWidth: "2.4rem",
          minHeight: "2.4rem",
          maxHeight: "2.4rem",
        }}
      >
        {children}
      </IconBox>
    }
  >
    <Typography variant="h6" fontSize="1rem">
      {label}
    </Typography>
    <Typography variant="h6" fontSize="1.6rem" position="relative">
      {value}
      &nbsp;
      <Typography
        variant="caption"
        sx={{ fontSize: "0.8rem", position: "absolute" }}
        color={ratio?.trim()[0] === "+" ? "success.main" : "error.main"}
      >
        {ratio}
      </Typography>
    </Typography>
    <Typography
      variant="caption"
      color="primary.100"
      sx={{ marginTop: "0.5rem" }}
    >
      {desc}
    </Typography>
  </GenericCard>
);
