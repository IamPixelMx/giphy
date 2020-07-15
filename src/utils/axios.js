import axios from 'axios';

const API_BASE_URL = process.env.GIFS_API_BASE_URL || 'https://api.giphy.com/v1/gifs';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// https://api.giphy.com/v1/gifs/search?api_key=qs1JyBa5SIrPpDDClWv5cD9HZpjThe0x&q=party&limit=50&offset=0&rating=pg-13&lang=es

export default axiosInstance;
