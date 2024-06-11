import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
