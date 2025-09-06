import mongoose from 'mongoose';

const EventsSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    category:{type:String,required:true,enum:['meetup','wedding','workshop','conference']},
    date:{type:Date},
    location:{type:String,required:true},
    banner:{type:String},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
},{ timestamps: true , versionKey: false }
);
const EventsModel = mongoose.model('events',EventsSchema);
export default EventsModel;