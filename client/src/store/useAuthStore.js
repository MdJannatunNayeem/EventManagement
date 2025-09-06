import  {create} from 'zustand';
import {setAuthToken} from "@/utils/api";

export const useAuthStore = create((set)=>({
    user:null,
    token:null,
    setUser:(user,token)=> {
        set({user: user, token: token});
        if(token){
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setAuthToken(token);
        }
    },
    loadFromStorage: () => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            set({ token, user: JSON.parse(user) });
            setAuthToken(token);
        }
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthToken(null);
        set({ user: null, token: null });
    }
}));