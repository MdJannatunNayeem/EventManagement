
import * as EventService from "../service/EventService.js";


export const EventCreateController = async (req,res) => {
    let result =await EventService.EventCreateService(req);
    return res.json(result);
}

export const EventDetailsController = async (req,res) => {
    let result =await EventService.EventDetailsService(req);
    return res.json(result);
}

export const MyEventDetailsController = async (req,res) => {
    let result =await EventService.MyEventDetailsService(req);
    return res.json(result);
}

export const EventUpdateController = async (req,res) => {
    let result =await EventService.EventUpdateService(req);
    return res.json(result);
}

export const EventDeleteController = async (req,res) => {
    let result =await EventService.EventDeleteService(req);
    return res.json(result);
}

export const AllEventController = async (req,res) => {
    let result =await EventService.AllEventService(req);
    return res.json(result);
}