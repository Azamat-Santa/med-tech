import axios from 'axios';
export const BASE_URL = 'https://medtechteam-2.herokuapp.com'
export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

api.interceptors.request.use((config) => {
    if(localStorage.getItem('tockenAcs')){
        const doctorTocken = localStorage.getItem('tockenAcs')
        config.headers.Authorization = `Bearer ${doctorTocken}`
    } 
    return config;
})


// api.interceptors.response.use((config) => {
//     return config;
// },async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && error.config && !error.config._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.post(`${BASE_URL}/refresh`, {withCredentials: true})
//             localStorage.setItem('doctorTocken', response.data.accessToken);
//             return api.request(originalRequest);
//         } catch (e) {
//             console.log('НЕ АВТОРИЗОВАН')
//         }
//     }
//     throw error;
// })

export default api;