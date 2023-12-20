import { createSlice } from "@reduxjs/toolkit";

export interface PayloadType {
  firstName: string;
  lastName: string;
  code: string;
  city: string;
  address: string;
}

interface InfoType {
  person: PayloadType[];
  firstName: string;
  lastName: string;
  code: string;
  city: string;
  address: string;
  selectPerson: PayloadType | undefined;
  inx: number;
}

const initialState: InfoType = {
  person: [],
  firstName: "",
  lastName: "",
  code: "",
  city: "",
  address: "",
  selectPerson: undefined,
  inx: -1,
};

export const Reducer = createSlice({
  name: "Makaremi",
  initialState,
  reducers: {
    addPerson: (state, { payload }: { payload: PayloadType }) => {
      let newPerson = [...state.person];
      newPerson.push(payload);
      state.person = newPerson;
      console.log(state.person);
    },
    getFristName: (state, { payload }: { payload: string }) => {
      state.firstName = payload;
    },
    getLastName: (state, { payload }: { payload: string }) => {
      state.lastName = payload;
    },
    getCode: (state, { payload }: { payload: string }) => {
      state.code = payload;
    },
    getCity: (state, { payload }: { payload: string }) => {
      state.city = payload;
    },
    getAddress: (state, { payload }: { payload: string }) => {
      state.address = payload;
    },
    getSelectedPerson: (
      state,
      { payload }: { payload: undefined | PayloadType }
    ) => {
      state.selectPerson = payload;
    },
    fillInputs: (state, { payload }: { payload: number }) => {
      state.inx = payload;
    },
  },
});

export const {
  addPerson,
  getFristName,
  getLastName,
  getCode,
  getCity,
  getAddress,
  getSelectedPerson,
  fillInputs,
} = Reducer.actions;
export default Reducer.reducer;
