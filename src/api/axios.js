import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://quyl-dashboard-fullstack.vercel.app/api/',
});

export default axiosInstance;
