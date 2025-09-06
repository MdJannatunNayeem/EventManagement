import { create } from "zustand";
import {getEvents, getMyEvents} from "@/utils/apiRequest";


export const useEventStore = create((set) => ({
    events: [],
    loading: false,
    error: null,

    fetchEvents: async () => {
        try {
            set({ loading: true, error: null });
            const res = await getEvents();
            set({ events: res.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },


    fetchMyEvents: async () => {
        try {
            set({ loading: true, error: null });
            const res = await getMyEvents();
            set({ events: res.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
