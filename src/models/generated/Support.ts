import { DateTime } from "luxon";
import { ObjectId } from "mongodb";

export type SupportTopicTypes = "afterSalesService" | "feedback" | "order" | "returnsAndRefunds" | "storesDrives" | "technicalProblem" | "other";

export type SupportStatusType = "cancelled" | "inProgress" | "resolved" | "unresolved" | "waiting";

export interface Support {
    id: ObjectId;
    user: ObjectId; // User.id
    openedOn: DateTime;
    updatedOn: DateTime;
    topic: SupportTopicTypes;
    content: string;
    details: string;
    status: SupportStatusType;
}