import * as axios from 'axios';

const apiAxios = axios.create({
  baseURL: `http://localhost:5000/api/members`
})

export default apiAxios;