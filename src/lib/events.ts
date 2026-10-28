export type LabelEvent = {
  date: string; // ISO date, YYYY-MM-DD
  time?: string;
  title: string;
  venue: string;
  city: string;
};

// Placeholder events: replace with real dates and venues.
export const events: LabelEvent[] = [
  { date: "2026-11-19", time: "22:00", title: "Dagsun Sounds@sounds for sanctuary", venue: "Factory floor", city: "Sheffield" }
]
