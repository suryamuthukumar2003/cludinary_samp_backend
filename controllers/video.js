import Video from "../models/Video.js";

export const createVideo= async (req,res,next)=>{
    const[imgUrl,videoUrl]=req.body;
    if(!imgUrl || !videoUrl){
        res.status(400);
        return next(new Error(`imgUrl & videoUrl fields are reuired`));
    }
    try{
        const video=await Video.create({
            imgUrl,
            videoUrl,
        });
        res.status(200).json({
            success:true,
            video,
        })
    }catch(err){
        console.log(err);;
        res.status(500);
        next(err);
    }
}