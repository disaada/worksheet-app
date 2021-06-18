import api from '@config/authApi'

export const login = (params) => api.post('/login', params);