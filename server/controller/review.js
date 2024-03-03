const Review = require('../models/review');

export const createReview = async(req,res)=>{
    const uid = req.params.uid;
    const pgid = req.params.pgid;
    const {rating,reviewDescription} = req.body;
    const review = new Review({
        pgId:pgid,
        rating:rating,
        reviewDescription:reviewDescription,
        userId:uid
    });
    try{
        const savedReview = await review.save();
        res.send({review:savedReview,},200);
    }
    catch(err){
        res.json({message:err});
    }
}