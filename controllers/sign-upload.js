import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure:true
});

export const generateSignature=(req,res,next)=>{
    const{folder}=req.body;
    if(!folder){
        res.status(400);
        return next(new Error("folder name is required"));
    }
    try{
        const timestamp= Math.round((new Date).getTime()/1000);
        const signature=cloudinary.utils.api_sign_request({
            timestamp,signature
        },process.env.CLOUDINARY_API_SECRET);

        res.status(201).json({timestamp,signature});
    }catch(err){
        console.log(err);
        res.status(500);
        next(err);
    }
}