import schedule from 'node-schedule';

import { emitter } from "../emmiter.js";


export const fromCurrentTime = (timeShiftSeconds) => {

    return (new Date().getTime() + timeShiftSeconds * 1000);
};



export const planStartGame = async (timeToStart) => {


    await createCronTask('123', timeToStart, "game:start");


};


export const planEndGame = async (timeToEnd) => {
    await createCronTask('456', timeToEnd, "game:end");

};


export const getCurrentTimerOfPlayer = async (playerId) => {

};


export const getCurrentTimerOfGame = async (gameId) => {

};



let tasks = [];

export const createCronTask = async (taskId, whenToExecute, action) => {



    tasks.push({
        taskId, whenToExecute, action
    });

    let job = schedule.scheduleJob(taskId, whenToExecute, function () {
        console.log('running campaign: ' + taskId);


        const currentTask = tasks.find(item => {
            return item.taskId === taskId;
        });

        console.log(currentTask);




        emitter.emit(currentTask.action, { test: 'Hello world' });
    });

    console.log(tasks);

    return job;
};