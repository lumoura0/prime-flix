import axios from 'axios'
// Base da URL: https://api.themoviedb.org/3/
// Chave api: 7fbaa3f5932ee13bd66b1de7e60fea8a
// /movie/now_playing??api_key=7fbaa3f5932ee13bd66b1de7e60fea8a&language=pt-BR
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
