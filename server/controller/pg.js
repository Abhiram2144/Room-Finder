const PG = require('../models/pg');

const createPg = async(req,res)=>{

    const {pgName,address,contact,roomsVacant,rent,cityId,images,description,collegeId} = req.body;
    
    try{

        const pg = PG.find({pgName: pgName});
        if(pg){
            return res.status(400).json({message:"PG already exists"});
        }
        const newPg = new PG({
            pgName: pgName,
            address: address,
            contact: contact,
            roomsVacant: roomsVacant,
            rent: rent,
            cityId: cityId,
            images: images,
            description: description,
            collegeId: collegeId
        });

        const savedPg = await newPg.save();
        res.send({pg:savedPg, message: "New PG successfully added!!" },200);
    }
    catch(err){
        res.json({message:err});
    }
}

const getPgs = async(req,res)=>{
    try{
        const pgs = await PG.find({include: [{model: College, as: 'college'}], include: [{model: City, as: 'city'}] });
        res.send({pgs:pgs},200);
    }
    catch(err){
        res.json({message:err});
    }
}

const getPgById = async(req,res)=>{
    const pgid = req.params.pgid;
    try{
        const pg = await PG.findOne({_id:pgid},{include: [{model: College, as: 'college'}], include: [{model: City, as: 'city'}]});
        res.send({pg:pg},200);
    }
    catch(err){
        res.json({message:err});
    }
}

const deletePg = async(req,res)=>{
    const pgid = req.params.pgid;
    try{
        const deletedPg = await PG.deleteOne({_id:pgid});
        res.send({pg:deletedPg, message: "PG removed successfully!!"},200);
    }
    catch(err){
        res.json({message:err});
    }
}

const updatePg = async(req,res)=>{
    const pgid = req.params.pgid;
    const {pgName,address,contact,roomsVacant,rent,cityId,images,description,collegeId} = req.body;
    try{
        const pg = await PG.find({_id:pgid});
        if(pg){
            return res.status(400).json({message:"PG does not exist"});
        }
        const updatedPg = await PG.updateOne({_id:pgid},{pgName:pgName,address:address,contact:contact,roomsVacant:roomsVacant,rent:rent,cityId:cityId,images:images,description:description,collegeId:collegeId});

        res.send({pg:updatedPg, message:"PG updated Successfully!!"},200);
    }
    catch(err){
        res.json({message:err});
    }
}

module.exports = {createPg, getPgs, getPgById, deletePg, updatePg};