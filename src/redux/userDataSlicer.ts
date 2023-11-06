import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: 'Divya Chatarjee',
  avatarLetter: 'DC',
  jobPosition: 'Assistant Manager - HR',
  about: 'Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more.',
  telephone: '1234567890',
  companyName: 'XYZ Company Name',
  mailSetting: 'dashboard'
}

export const userDataSlicer = createSlice({
  name: 'userspro',
  initialState,
  reducers: {
    updateData: (state, action) => {
      const newData = action.payload;
      const avatarLetter = newData.name.match(/\b\w/g).join('').toUpperCase()
      return { ...newData, avatarLetter: avatarLetter }
    }
  }
});

export const { updateData } = userDataSlicer.actions;

export default userDataSlicer.reducer;