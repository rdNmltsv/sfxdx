import { Roles, address } from "./types";

export interface IUser {
  role: Roles;
  wallet: address;
}
