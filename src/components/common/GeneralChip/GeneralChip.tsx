import { Chip, ChipProps } from "@mui/material";
import { FC } from "react";
import { TableStatus } from "../Table";

interface IGeneralChip {
  type: TableStatus;
}

const colorMapping: Record<TableStatus, ChipProps["color"]> = {
  applied: "primary",
  current: "secondary",
  professional: "success",
  rejected: "error",
  resigned: "warning",
};

export const GeneralChip: FC<IGeneralChip & ChipProps> = ({
  type,
  ...props
}) => {
  return <Chip color={colorMapping[type]} {...props} />;
};
