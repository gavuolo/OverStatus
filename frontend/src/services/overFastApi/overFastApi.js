import axios from 'axios';

const overFastApi = axios.create({
  baseURL: 'https://overfast-api.tekrop.fr'
});

export default overFastApi;