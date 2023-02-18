import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

// Daily - rate
export const postDailyRate = async data => {
  try {
    const response = await axios.post('/daily-rate', data);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};

// Daily - rate with id
export const postDailyRateWithId = async (id, data) => {
  try {
    const response = await axios.post(`/daily-rate/${id}`, data);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};

// Products
export const getProducts = async value => {
  try {
    const response = await axios.get(`/product?search=${value}`);
    return response.data;
  } catch (error) {
    toast.warning('No allowed products', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      theme: 'colored',
      icon: '🚀',
      toastId: 'yes',
      pauseOnHover: false,
    });
    return {
      error,
    };
  }
};
// Post Dairy Product
export const postProduct = async value => {
  try {
    const response = await axios.post('/day', value);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
// Delete Dairy Product
export const deleteProduct = async value => {
  try {
    const response = await axios.delete('/day', {
      data: value,
    });
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
// Delete Dairy Product
export const getDayProducts = async value => {
  try {
    const response = await axios.post('/day/info', value);
    return response.data;
  } catch (error) {
    return {
      error,
    };
  }
};
