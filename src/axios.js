import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://5fb9db297f538800165a57b8.mockapi.io/api/v1/'
});

export default instance;