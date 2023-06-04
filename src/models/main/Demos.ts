import { DateTime } from "luxon";
import { ObjectId } from "mongodb";

export type DemosStatusType = "waiting" | "inProgress" | "done" | "cancelled";

export interface Demos {
  id: ObjectId;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  details: string;
  openedOn: DateTime;
  updatedOn: DateTime;
  status: DemosStatusType;
}
