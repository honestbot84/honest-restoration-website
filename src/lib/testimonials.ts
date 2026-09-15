import data from "../../content/reviews/testimonials-approved.json";

export type Testimonial = {
  name: string;
  stars: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = data.selected;

/** Google Maps place link from approved reviews JSON */
export const TESTIMONIALS_MAPS_URL = data.source;

/** Homepage aggregate line (matches brand display, not raw JSON phrasing) */
export const TESTIMONIALS_AGGREGATE = "5.0 · 15 Google reviews";
