export interface Geo {
  country: string;
  lat: number;
  lon: number;
}

export interface BannerFormat {
  w: number;
  h: number;
}

export interface Banner {
  format: BannerFormat[];
}

export interface Impression {
  id: string;
  banner: Banner;
  bidfloor: number;
}

export interface Publisher {
  id: string;
  name: string;
}

export interface Site {
  id: string;
  name: string;
  domain: string;
  page: string;
  publisher: Publisher;
}

export interface Device {
  ua: string;
  ip: string;
  geo: Geo;
  dnt: number;
  lmt: number;
  language: string;
}

export interface User {
  id: string;
  buyeruid: string;
  yob: number;
  gender: "M" | "F" | "O";
}

export interface BidRequest {
  id: string;
  imp: Impression[];
  site: Site;
  device: Device;
  user: User;
  at: 1 | 2;
  tmax: number;
  cur: string[];
  wseat?: string[];
  allimps?: 0 | 1;
  bcat?: string[];
  badv?: string[];
}
