import axios from 'axios';
export {}

export default axios.create({
    baseURL: 'https://registry.npmjs.org/-/v1/search'
});