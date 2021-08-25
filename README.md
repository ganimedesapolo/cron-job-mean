CRON JOB TASK SCHEDULER

LIVE DEMO  : https://cron-job-task.herokuapp.com/

HOW TO USE 
Please enter the FULL URL (with http or https) and the cron expression (e.g. * * * * *  for every minute execution), cron expression without quotes.

FEATURES
The web app store the task and cron expression in the server. Programming the task according to cron syntax in the server you can view the execution via console logs,
for heroku "heroku logs --tail".

After save task the app send a preview header's , but the execution is according to via cron expression. 
The preview is information data, for viewing task execution please use console logs in the server


1. Architecture Based on MEAN full stack enviroment. (Mongo, express, Angular & Node)

2. Additional dependencies : 
-node-cron for task scheduling on node js
-scrapeIt  for scraping request on node js

3. Another features : Delete Task.


API ENDPOINTS

1. Get all tasks  :  https://cron-job-task.herokuapp.com/api/v1/tasks/

2. Post (save tasks) :  https://cron-job-task.herokuapp.com/api/v1/tasks/   

    Data Format  :
     {
        "crontext": "* * * * *",
        "url": "https://google.com/"
     }

3. Delete  (delete task):  https://cron-job-task.herokuapp.com/api/v1//:id
