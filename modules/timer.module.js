import schedule from 'node-schedule';


export const planStartGame = async (time) => {
    console.log('Game planned to ' + time);
};


export const planEndGame = async () => {

};


export const getCurrentTimerOfPlayer = async (playerId) => {

};


export const getCurrentTimerOfGame = async (gameId) => {

};

export const cronTasks = async () => {
    
    const job = schedule.scheduleJob('4 * * * * *', function() {
        planStartGame(Date.now());
    });
};