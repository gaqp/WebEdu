import axios from 'axios';

const api = axios.create({baseURL:'https://backedu.azurewebsites.net/'});

export default api;