import { NotificationCreateNestedManyWithoutEventsInput } from "./NotificationCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  category?: string | null;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  notifications?: NotificationCreateNestedManyWithoutEventsInput;
  numberOfSeats?: number | null;
  oldCategory?: string | null;
  tempCategory?: string | null;
  title?: string | null;
};
