import { Location } from "../location/Location";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  locations?: Array<Location>;
  notifications?: Array<Notification>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
