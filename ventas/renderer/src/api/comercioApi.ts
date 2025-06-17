import axios from 'axios';
import { getEnvVariables } from '../helpers';

    const { VITE_API_COMERCIOURL } = getEnvVariables();
    
    const comercioApi = axios.create({
        baseURL: VITE_API_COMERCIOURL
    });

export default comercioApi;
