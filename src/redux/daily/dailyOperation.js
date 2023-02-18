import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../../services/api/base_api';

export const dailyRateOperation = createAsyncThunk(
  'daily/dailyRateId',

  async (value, { rejectWithValue }) => {
    const { id, data } = value;
    try {
      const dailyRate = await Api.postDailyRateWithId(id, data);
      return dailyRate;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
