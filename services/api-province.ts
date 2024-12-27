import axios from 'axios';

// URL API tỉnh, thành phố của Việt Nam
const API_URL = 'https://provinces.open-api.vn/api/';

export const fetchProvinces = async () => {
  try {
    const response = await axios.get(`${API_URL}?depth=2`);
    return response.data.map((item: any) => ({
      label: item.name,
      value: item.code.toString(),
    }));
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw error;
  }
};