import {create } from 'zustand';
import { apiClient } from '../lib/axios';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
    authuser: null,
    isSingingUp: false,
    isLoggingIn: false,
    isupdatingProfile: false,
    ischeckingAuth: true,

checkauth: async () => {
    try {
        const response = await axiosInstance.get('/auth/check');
        set({authuser: response.data});
    } catch (error) {
        console.error('Auth check failed', error);
        set({authuser: null});
    } finally {
        set({ischeckingAuth: false});
    }
}

}));