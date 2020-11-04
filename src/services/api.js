import axios from 'axios';

const api = axios.create({baseURL:'https://backedu.azurewebsites.net/'});
//const api = axios.create({baseURL:'http://localhost:3001'});

export default api;