import {create } from 'zustand';
import { apiClient } from '../lib/axios';


export const useAuthStore = create((set) => ({
    authuser: null,
    ischeckingAuth: true,
}));