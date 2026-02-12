const { v4: uuidv4 } = require("uuid");
const taskModel = require("../models/task.model");
const logAction = require("../utils/logger");

exports.createTask = async (req,res,next)=>{
 try{
   const id = uuidv4();
   const {title,description,status="pending"} = req.body;

   await taskModel.create(id,req.user.id,title,description,status);
   await logAction(req.user.id,"TASK_CREATED");

   res.json({message:"Task created",id});
 }catch(err){next(err);}
};

exports.getTasks = async (req,res,next)=>{
 try{
   const [rows] = await taskModel.findAllByUser(req.user.id);
   res.json(rows);
 }catch(err){next(err);}
};

exports.updateTask = async (req,res,next)=>{
 try{
   const {title,description,status} = req.body;

   await taskModel.update(req.params.id,req.user.id,title,description,status);
   await logAction(req.user.id,"TASK_UPDATED");

   res.json({message:"Task updated"});
 }catch(err){next(err);}
};

exports.deleteTask = async (req,res,next)=>{
 try{
   await taskModel.remove(req.params.id,req.user.id);
   await logAction(req.user.id,"TASK_DELETED");

   res.json({message:"Task deleted"});
 }catch(err){next(err);}
};
