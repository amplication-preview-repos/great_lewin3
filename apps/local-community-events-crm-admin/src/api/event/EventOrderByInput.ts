import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  numberOfSeats?: SortOrder;
  oldCategory?: SortOrder;
  tempCategory?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
