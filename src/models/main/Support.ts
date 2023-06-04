import { DateTime } from "luxon";
import { ObjectId } from "mongodb";

export type SupportTopicTypes =
  | "order"
  | "payments"
  | "userAccounts"
  | "products"
  | "shippingDelivery"
  | "customerService"
  | "security"
  | "technicalIssues"
  | "returnsAndRefound"
  | "other";

export type SupportStatusTypes =
  | "cancelled"
  | "inProgress"
  | "resolved"
  | "unresolved"
  | "waiting";

export interface Support {
  id: ObjectId;
  companyName: string;
  email: string;
  topic: SupportTopicTypes;
  updatedOn: DateTime;
  openedOn: DateTime;
  subject: string;
  details: string;
  status: SupportStatusTypes;
}
