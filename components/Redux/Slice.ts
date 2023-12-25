import { createSlice } from "@reduxjs/toolkit";

export interface PayloadType {
  firstName: string;
  lastName: string;
  code: string;
  city: string;
  address: string;
}
  
interface TimeType {
  hour: string;
  id: number;
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
  date: string;
  active: number | null;
  time: TimeType[];
  selectedTime: string;
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
  date: "",
  active: null,
  time: [
    { hour: "۱۵:۰۰", id: 1 },
    { hour: "۱۰:۰۰", id: 2 },
    { hour: "۱۲:۰۰", id: 3 },
    { hour: "۱۸:۰۰", id: 4 },
    { hour: "۱۴:۰۰", id: 5 },
    { hour: "۱۶:۰۰", id: 6 },
  ],
  selectedTime: "",
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
    getDate: (state, { payload }: { payload: string }) => {
      state.date = payload;
    },
    chnageActive: (state, { payload }: { payload: number }) => {
      state.active = payload === state.active ? null : payload;
      console.log(state.active);
    },
    getSelectedTime: (state, { payload }: { payload: string }) => {
      state.selectedTime = payload;
      console.log(state.selectedTime);
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
  getDate,
  chnageActive,
  getSelectedTime,
} = Reducer.actions;
export default Reducer.reducer;
