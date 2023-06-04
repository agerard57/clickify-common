import { DateTime } from "luxon";
import { ObjectId } from "mongodb";
import { BaseAddress } from "./BaseAddress";

export type UserStatusTypes = "active" | "banned" | "inactive";

export type UserCategoryTypes =
  | "user"
  | "consultant"
  | "merchandiser"
  | "orderPicker"
  | "admin";

export interface Users {
  id: ObjectId;
  name: string;
  password: string;
  lastPasswordGen: DateTime;
  phoneNumber?: string;
  email: {
    confirmed: boolean;
    emailAddress: string;
  };
  gender?: string;
  dateOfBirth?: DateTime;
  addressInfos?: {
    residentName: string;
    shippable: boolean;
    address: BaseAddress;
  }[];
  photoPath: string; // | default
  favoriteProducts?: ObjectId[]; // Products.id
  favoriteStore?: ObjectId; // Stores.id
  registeredOn: DateTime;
  updatedOn: DateTime;
  status?: UserStatusTypes;
  category: UserCategoryTypes;
  notifications?: {
    content: string;
    timestamp: DateTime;
    read: boolean;
  }[];
  stripeId?: string;
  refreshTokens?: string[];
}
