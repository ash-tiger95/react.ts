import { EEmailAddress } from "@enum/User";
export interface MUser {
  email: EEmailAddress;
  emailAddress: string;
  password: string;
  name: string;
  age: number;
  phone: number;
  location: MLocation;
}

export interface MLocation {
  country: string;
  do: string;
  si: string;
  dong: string;
  gu: string;
  ro: string;
  roNo: number;
  detail: string;
}
