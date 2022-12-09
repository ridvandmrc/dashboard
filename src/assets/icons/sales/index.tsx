import { FC } from "react";

import gumroadImage from "./images/gumroad.png";
import awsImage from "./images/aws.png";
import digitalOceanImage from "./images/digital-ocean.png";
import githubImage from "./images/github.png";
import slackImage from "./images/slack.png";
import americanBankImage from "./images/american-bank.png";
import citiBankImage from "./images/citi-bank.png";
import googleImage from "./images/google.png";
import stripeImage from "./images/stripe.png";
import mastercardImage from "./images/mastercard.png";

type SalesIconTypes =
  | "Gumroad"
  | "Aws"
  | "DigitalOcean"
  | "Github"
  | "Slack"
  | "AmericanBank"
  | "CitiBank"
  | "Google"
  | "Mastercard"
  | "Stripe";

export const SalesIcons: Record<SalesIconTypes, FC> = {
  Gumroad: () => <img src={gumroadImage} alt="gumroad" />,
  Aws: () => <img src={awsImage} alt="aws" />,
  DigitalOcean: () => <img src={digitalOceanImage} alt="digital ocean" />,
  Github: () => <img src={githubImage} alt="github_image" />,
  Slack: () => <img src={slackImage} alt="slace_image" />,
  AmericanBank: () => <img src={americanBankImage} alt="american_image" />,
  CitiBank: () => <img src={citiBankImage} alt="citi_bank_image" />,
  Google: () => <img src={googleImage} alt="google_image" />,
  Mastercard: () => <img src={mastercardImage} alt="mastercard_image" />,
  Stripe: () => <img src={stripeImage} alt="stripe_image" />,
};
