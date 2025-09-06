import * as UserService from "../service/UserService.js";


//user registration
export const register=async(req,res)=>{
    let result =await  UserService.registerService(req);
    return res.json(result);
}

//login
export const login=async(req,res)=>{
    let result =await  UserService.loginService(req,res);
    return res.json(result);
}

//logout

export const logout=async(req,res)=>{
    let result=await  UserService.logoutService(req,res);
    return res.json(result);
}
