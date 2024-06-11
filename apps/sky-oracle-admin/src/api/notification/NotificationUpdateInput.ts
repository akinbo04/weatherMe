import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
