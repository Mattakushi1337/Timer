import schedule from 'node-schedule';



const taskId = "11";
let task = schedule.scheduleJob(taskId, '* * * * * *', function () {
    console.log('running campaign: ' + taskId);
})

setTimeout(task.cancel, 2000)