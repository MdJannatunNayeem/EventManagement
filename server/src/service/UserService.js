import UsersModel from "../models/UsersModel.js";
import {EncodeToken} from "../utility/tokenUtility.js";


export const registerService = async (req) => {
    try {
        const reqBody = req.body;
        //console.log("request accept", reqBody);

        const existingUser = await UsersModel.findOne({ email: reqBody.email });
        if (existingUser) {
            return { status: false, msg: 'User already exists with this email.' };
        }

        const data=await UsersModel.create(reqBody);
       // console.log(data);
        return {status:true, data:data , msg:"successfully register"};
    }catch(e){
        return {status:'error',error:e.toString()};
    }
}

//login-service

export const loginService = async (req,res)=>{
    try{

        let existUser= await UsersModel.findOne({email:req.body.email});
       // console.log(existUser)

        if(!existUser){
            return {status:"fail", msg:"User does not exist"};
        }
        else{
            let reqBody={email: req.body.email,password:req.body.password};
            //console.log("reqBody:",reqBody);
            let data = await UsersModel.aggregate([
                {$match:reqBody},
                {$project:{ _id: 1,email: 1}},
            ]);
          //  console.log("data",data);
            if(data.length === 1){
                let token = EncodeToken(data[0]["email"],data[0]["_id"]);

                let options = {
                    maxAge:30*24*60*60*1000,
                    httpOnly:false,
                    sameSite:null,
                    secure:true,
                };
                res.cookie('token', token, options);
                console.log("data",data,token);
                return {status:"success",msg: ` Login successful.` , token:token, user:existUser._id};
            } else {
                return { status: "fail", data: data, msg: "Login unsuccessful." };
            }

        }
    }catch(e){
        return {status:'error',error:e.toString()};
    }
}

//logout
export const logoutService = async (req,res) => {
    try {
        res.clearCookie("token");
        return { status: true, msg: "Logout success." };
    } catch (e) {
        return { status: false, error: e, msg: "Logout failed" };
    }
}



