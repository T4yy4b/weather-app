import axios from 'axios';

const baseURL = "https://internalservices.weatherwalay.com";

const BASE_URL = axios.create({
  baseURL: baseURL ,
  headers: {
    Authorization: `Basic ${import.meta.env.VITE_WEATHER_INTERNAL_BASIC}`,
  },
});



export const getWeatherByLatLong = async (coordinates) => {
  try {
    const response = await BASE_URL.post("weatherInternal/byLatLong", coordinates);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};