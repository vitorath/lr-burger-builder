import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bulder-burger.firebaseio.com/'
});

export default instance;