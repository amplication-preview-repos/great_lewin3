import { NotificationUpdateManyWithoutEventsInput } from "./NotificationUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  category?: string | null;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  notifications?: NotificationUpdateManyWithoutEventsInput;
  numberOfSeats?: number | null;
  oldCategory?: string | null;
  tempCategory?: string | null;
  title?: string | null;
};
