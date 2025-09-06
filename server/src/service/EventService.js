import mongoose from 'mongoose';
import EventsModel from "../models/EventsModel.js";


export const EventCreateService = async (req)=>{

    //console.log(req.body);

    try {
        let Id =new mongoose.Types.ObjectId (req.headers.id);
        let reqBody = req.body;

       // console.log(reqBody);
        let result = await EventsModel.create({ ...reqBody,userId:Id });
        return {status:true, data:result, msg:"successfully created"};
    }catch(err){
        console.log(err);
        return {status:'error', msg:'Something Went Wrong' ,error:err.toString()};
    }
}

export const EventDetailsService = async (req)=>{

    //console.log(req.body);

    try {
        let Id =req.params.id;


        let result = await EventsModel.findOne({ _id:Id });
        //console.log(result);
        return {status:true, data:result, msg:"successfully find"};
    }catch(err){
        console.log(err);
        return {status:false, msg:'Something Went Wrong' ,error:err.toString()};
    }
}

export const MyEventDetailsService = async (req)=>{

    //console.log(req.body);

    try {
        let Id =new mongoose.Types.ObjectId (req.headers.id);


        let result = await EventsModel.find({ userId:Id });
        //console.log(result);
        return {status:true, data:result, msg:"successfully find"};
    }catch(err){
        console.log(err);
        return {status:'error', msg:'Something Went Wrong' ,error:err.toString()};
    }
}

export const AllEventService = async (req)=>{

    //console.log(req.body);

    try {

        let result = await EventsModel.find();
        //console.log(result);
        return {status:true, data:result, msg:"successfully find"};
    }catch(err){
        console.log(err);
        return {status:'error', msg:'Something Went Wrong' ,error:err.toString()};
    }
}


export const EventUpdateService = async (req)=>{

    //console.log(req.body);

    try {
        let Id =req.params.id;
        //let reqBody=req.body;
        //console.log(req.body);
        let {title,description,category,date,location,banner}=req.body;
        let updateData ={title,description,category,date,location,banner};


        let result = await EventsModel.findByIdAndUpdate(  Id, updateData, { new: true, runValidators: true } );
       // console.log(result);
        return {status:true, data:result, msg:"successfully Update"};
    }catch(err){
        console.log(err);
        return {status:'error', msg:'Something Went Wrong' ,error:err.toString()};
    }
}

export const EventDeleteService = async (req) => {
    try {
        let Id = req.params.id;

        let result = await EventsModel.findByIdAndDelete(Id);

        if (!result) {
            return { status: false, msg: "Event not found" };
        }

        return { status: true, data: result, msg: "Successfully Deleted" };

    } catch (err) {
        console.log(err);
        return { status: 'error', msg: 'Something Went Wrong', error: err.toString() };
    }
};
