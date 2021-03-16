import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-5f281-default-rtdb.firebaseio.com/'
})

export default instance;