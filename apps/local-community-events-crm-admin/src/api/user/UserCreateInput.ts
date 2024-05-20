import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { PreferenceCreateNestedManyWithoutUsersInput } from "./PreferenceCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password?: string | null;
  preferences?: PreferenceCreateNestedManyWithoutUsersInput;
  role?: "Option1" | null;
  username?: string | null;
};
