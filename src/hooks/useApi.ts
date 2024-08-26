import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.logis.com.co/v1/",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const useApi = () => ({
    queryMesas: async (payload: object) => {
        const response = await api.post('mesas?selectAll', payload)
        return response.data
    },
    queryProductos: async (payload: object) => {
        const response = await api.post('productos?selectAll', payload)
        return response.data
    },
    queryFamilias: async (payload: object) => {
        const response = await api.post('familias?selectAll', payload)
        return response.data
    },
    queryCategorias: async (payload: object) => {
        const response = await api.post('categorias?selectAll', payload)
        return response.data
    },
    validateToken: async (apiKey: string) => {
        const response = await api.post('configuracion_pos?selectAll', {
            apiKey
        })
        return response.data
    },
    signin: async (user: string, pass: string, application:string) => {
        const response = await api.post('secure', {
            user, pass, application
        })
        return response.data
    },
    logout: async () => {
        const response = await api.post('/logout')
        return response.data
    }
});