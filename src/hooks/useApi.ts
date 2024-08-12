import axios from 'axios';

const api = axios.create({
    //baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (apiKey: string) => {
        const response = await api.post('https://api.logis.com.co/v1/configuracion_pos?selectAll', {
            apiKey
        })
        return response.data
        // return {
        //     user: { id: 3, name: 'José', email: 'jose@gmail.com' }
        // };
    },
    signin: async (user: string, pass: string, application:string) => {
        const response = await api.post('https://api.logis.com.co/v1/secure', {
            user, pass, application
        })
        return response.data
        // return {
        //     user: { id: 3, name: 'José', email: 'jose@gmail.com' },
        //     token: '123456789'
        // };
    },
    logout: async () => {
        const response = await api.post('/logout')
        return response.data
        //return { status: true };
    }
});