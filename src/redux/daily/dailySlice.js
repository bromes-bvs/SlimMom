import { createSlice } from '@reduxjs/toolkit';
import { dailyRateOperation } from './dailyOperation';

export const dailySlice = createSlice({
  name: 'daily',
  initialState: {},
  extraReducers: {
    [dailyRateOperation.fulfilled]: (state, { payload }) => {
      if (payload.error) {
        state.error = payload.error.message;
      } else {
        return (state = payload);
      }
    },
    [dailyRateOperation.rejected]: (state, { payload }) => {
      return (state = {});
    },
  },
});
