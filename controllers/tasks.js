const Task = require('../models/Task')

var cron = require('node-cron');
var ping = require('ping');

const { exists } = require('../models/Task');


// @desc Get All tasks
// @route GET /api/v1/tasks
// @ access Public

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find(); 
        return res.status(200).json(
         
          
          [
           ...tasks
          ]



        );
        
       } catch (error) {
         return res.status(500).json({
          success : false,
          error : 'Server Error'    
         })   
       } 


}


// @desc Add tasks 
// @route POST /api/v1/tasks
// @ access Public

exports.addTasks = async (req, res, next) => {
    try {
        const {crontext,url,createdAt} = req.body; 
        const task = await Task.create(req.body)

             
   ///////programming ping with cron
  cron.schedule(task.crontext, () => {
    console.log("-------------------------------------------------------"+Date().toLocaleString()+"-------------------------------------------------------------------------------");
    const datas  = await ping.promise.probe(task.url);
    console.log(datas);
    ///  ping.promise.probe(task.url).then(function (data) {
    ///  console.log(data);
   //// });
});


      ////   const datas  = await ping.promise.probe(task.url);
        
       
          return res.status(201).json({
            success: true,
            data: {task},
      
       });
    
      
       

  ///to do ping promise first time and send with taks data for render
    //// ping.promise.probe(task.url) .then(function (data) {
          
////});
   

    
 } catch (err) {
       
          if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
      
            return res.status(400).json({
              success: false,
              error: messages
            });
          } else {
            return res.status(500).json({
              success: false,
              error: 'Server Error'
            });
          }
        }
   }
   
   
   
   // @desc    Delete tasks
   // @route   DELETE /api/v1/tasks/:id
   // @access  Public
   exports.deleteTasks = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
    
        if(!task) {
          return res.status(404).json({
            success: false,
            error: 'No task found'
          });
        }
    
        await task.remove();
    
        return res.status(200).json({
          success: true,
          data: {}
        });
    
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }


   }



