import { FC, ReactNode } from "react";
import { Card, CardProps, IconButton, Stack, Typography } from "@mui/material";
import { MuiIcons } from "@/assets";

interface ICardProps {
  actionsButton?: boolean;
  title: ReactNode;
}

export const GenericCard: FC<ICardProps & Omit<CardProps, "title">> = ({
  sx,
  actionsButton,
  children,
  title,
  ...props
}) => {
  return (
    <Card
      {...props}
      sx={{
        boxShadow: "0px 2px 10px 0px rgb(58 53 65 / 10%)",
        borderRadius: "6px",
        padding: "1.25rem",
        color: "primary.main",
        ...sx,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">{title}</Typography>
        {actionsButton && (
          <IconButton>
            <MuiIcons.More />
          </IconButton>
        )}
      </Stack>
      <Stack marginTop={2} height="100%">
        {children}
      </Stack>
    </Card>
  );
};
