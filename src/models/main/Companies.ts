import { DateTime } from 'luxon';
import { ObjectId } from 'mongodb';

import {
  Languages,
  LayoutDispositions,
  MainSupportStatuses,
  PlanTypes,
  WebsiteStatuses,
  WebsiteSupportStatuses
} from '../../enums';

export interface BillingAddress {
  number: string;
  streetName: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PlanHistory {
  current: boolean;
  plan: PlanTypes;
  since: DateTime;
  exp?: DateTime;
  price?: number;
}

export interface LandingPage {
  text?: string;
  imagePath?: string;
  layout: LayoutDispositions;
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

export interface Support {
  status: WebsiteSupportStatuses;
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

export interface WebsiteInfos {
  lang: Languages;
  domainName: string;
  landingPage: LandingPage;
  support: Support;
  aboutUs: AboutUs;
  fullLogoPath: string;
  smallLogoPath: string;
  colors: Colors;
  createdOn: DateTime;
  updatedOn: DateTime;
  status: WebsiteStatuses;
  maintenanceMessage: string;
}

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
  status: MainSupportStatuses;
}
