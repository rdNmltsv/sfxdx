import { RootState } from "../../app/store";
import { IUser } from "../../types/User";
import { Roles, address } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: IUser;
}

const initialState: UserState = {
  user: { role: Roles.user, wallet: undefined },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setWallet(state, action: PayloadAction<address>) {
      state.user.wallet = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const { setWallet } = userSlice.actions;
export default userSlice.reducer;
