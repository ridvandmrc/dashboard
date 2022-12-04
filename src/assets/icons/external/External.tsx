import { FC, SVGProps } from "react";
import { Increase } from "./svg";

export type ExternalIconProps = "Increase";

export const ExternalIcon: Record<
  ExternalIconProps,
  FC<SVGProps<SVGSVGElement>>
> = {
  Increase: Increase,
};
