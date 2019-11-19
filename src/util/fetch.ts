import axios from 'axios';
import Cookie from 'js-cookie';

const fetchFn = axios.create({
    baseURL: 'http://127.0.0.1:7001'
});

fetchFn.interceptors.request.use(config => {
    console.log(config);
    config.headers['x-csrf-token'] = Cookie.get('csrftoken');
    return config;
})

fetchFn.interceptors.response.use(res => {
    return res.data;
})

export default fetchFn;