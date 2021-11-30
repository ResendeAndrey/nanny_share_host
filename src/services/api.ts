import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.jungledevs.com/api/v1/'
})