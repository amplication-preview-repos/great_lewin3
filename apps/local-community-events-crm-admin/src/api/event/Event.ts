import { Notification } from "../notification/Notification";

export type Event = {
  category: string | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  notifications?: Array<Notification>;
  numberOfSeats: number | null;
  oldCategory: string | null;
  tempCategory: string | null;
  title: string | null;
  updatedAt: Date;
};
