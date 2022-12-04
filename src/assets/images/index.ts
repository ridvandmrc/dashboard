import { FC } from "react";
import { LogoZipcar } from "./LogoZipcar";
import { TrophyImage } from "./Trophy";
import { Bitbank } from "./Bitbank";
import { Avito } from "./Avito";

type ImageTypes = "Trophy" | "Zipcar" | "Bitbank" | "Avito";

export const PageImages: Record<ImageTypes, FC> = {
  Trophy: TrophyImage,
  Zipcar: LogoZipcar,
  Bitbank: Bitbank,
  Avito: Avito,
};
