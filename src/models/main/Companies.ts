import { DateTime } from "luxon";
import { ObjectId } from "mongodb";

export interface BillingAddress {
  number: string;
  streetName: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export type PlanTypes =
  | "pending"
  | "basic"
  | "clickify"
  | "premium"
  | "none"
  | "banned";

export interface PlanHistory {
  current: boolean;
  plan: PlanTypes;
  since: DateTime;
  exp?: DateTime;
  price?: number;
}

export type LangTypes = "en" | "fr";

export type LayoutTypes = "left" | "centered" | "right";

export interface LandingPage {
  text?: string;
  imagePath?: string;
  layout: LayoutTypes;
}

export interface AboutUs {
  text?: string;
  phoneNumber?: {
    display: boolean;
    number: string;
  };
  emailAddress?: {
    confirmed: boolean;
    emailAddress: string;
  };
  termsAndConditions?: {
    filePath: string;
    lastModified: DateTime;
  };
  photoPath?: string;
}

export type SupportStatusTypes = "offline" | "online" | "locked";

export interface Support {
  status: SupportStatusTypes;
  email: {
    confirmed: boolean;
    emailAddress: string;
  };
  phoneNumber: {
    display: boolean;
    number: string;
  };
  photoPath?: string;
}
export interface Colors {
  primary: string;
  textColor: string;
}

export type WebsiteStatusTypes = "active" | "maintenance" | "inactive";

export interface WebsiteInfos {
  lang: LangTypes;
  domainName: string;
  landingPage: LandingPage;
  support: Support;
  aboutUs: AboutUs;
  fullLogoPath: string;
  smallLogoPath: string;
  colors: Colors;
  createdOn: DateTime;
  updatedOn: DateTime;
  status: WebsiteStatusTypes;
  maintenanceMessage: string;
}

export type UserStatusTypes = "active" | "banned" | "inactive";

export interface Companies {
  id: ObjectId;
  legalName: string;
  tradingName: string;
  email: string;
  password: string;
  lastPasswordGen: DateTime;
  billingAddress?: BillingAddress;
  planHistory?: PlanHistory[];
  stripeId?: string;
  websiteInfos?: WebsiteInfos;
  registeredOn: DateTime;
  updatedOn: DateTime;
  refreshTokens?: string[];
  recoveryCode?: string;
  status: UserStatusTypes;
}
