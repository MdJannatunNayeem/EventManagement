import { api } from "@/utils/api";
import toast from "react-hot-toast";


export async function login(reqBody) {
    try {
        console.log("reqBody:", reqBody);
        const result = await api.post("/login", reqBody);

        console.log("api",result);

        if (result.data.status === "success") {
            toast.success(result.data.msg);
            const { token, user } = result.data;
            return { success: true, token, user };
        } else {
            toast.error(result.data.msg);
            return { success: false };
        }
    } catch (err) {
        console.error(err);
        ErrorToast("Login failed!");
        return { success: false };
    }
}


export async function logoutUser()
{
    let result = await api.get(`/logout`, {
        withCredentials: true,
    });
    if (result.data.status === true) {
        toast.success(result.data.msg);
        return true;
    } else {
        toast.error(result.data.msg);
        return false;
    }
}

export async function register(reqBody){
    console.log("register request",reqBody);
    let result=await api.post(`/register`,reqBody);

    if (result.data.status === true) {
        toast.success(result.data.msg);
        return true;
    }
    else{
        toast.error(result.data.msg);

    }

}

export async function fileUpload (reqBody) {

    let result = await api.post(`/file-upload`, reqBody);
    if (result.data.status === true) {

        console.log("api-img",result.data.file);
        return result;
    } else {
        return false;
    }
}

// Fetch All Events
export async function getEvents() {
    let result= await api.get("/events");
    if (result.data.status === true) {
        toast.success(result.data.msg);

        return { success: true, data: result.data.data };
    } else {
        toast.error(result.data.msg);
        return { success: false };
    }

}

// Fetch Single Event
export async function getEventById(id) {
    let result= await api.get(`/events/${id}`);
    console.log("api",result.data.data);
    if (result.data.status === true) {
        toast.success(result.data.msg);
        console.log("api",result.data.data);
        return { success: true, data: result.data.data };
    } else {
        toast.error(result.data.msg);
        return { success: false };
    }
}

// Create Event
export async function createEventRequest(data) {
    let result=await api.post(`/create-event`,data,{
        withCredentials: true,
    });

    if (result.data.status === true) {
        toast.success(result.data.msg);
        return true;
    }
    else{
        toast.error(result.data.msg);

    }
}


export async function updateEventRequest(id, data) {

    let result= await api.post(`/events/${id}/update`, data,{
        withCredentials: true,
    });
    console.log("result is",result.data);
    if (result.data.status === true) {
        toast.success(result.data.msg);
        return true;
    }
    else{
        toast.error(result.data.msg);

    }
}


export async function deleteEventRequest(id) {
    let result = await api.delete(`/events/${id}/delete`);
    if (result.data.status === true) {
        toast.success(result.data.msg);
        return true;
    }
    else{
        toast.error(result.data.msg);

    }
}


export async function getMyEvents() {
    let result= await api.get("/my-event",{
        withCredentials: true,
    });
    if (result.data.status === true) {
        toast.success(result.data.msg);

        return { success: true, data: result.data.data };
    } else {
        toast.error(result.data.msg);
        return { success: false };
    }
}



