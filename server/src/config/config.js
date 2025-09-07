import dotenv from 'dotenv';
dotenv.config();


export const MONGODB_CONNECTION=process.env.MONGODB_CONNECTION;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATION_TIME = 60*60*24*30;

export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";
export const MAIL_ENCRYPTION="";


export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;


export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = 3000; // Per 15 Min 3000 Request Allowed


export const WEB_CACHE=false;
export const PORT = process.env.PORT ;


