import schedule from 'node-schedule'


export const planStartGame = async (secondToAddStart) => {
    var currentDate = new Date()
    var futureDateForStart = (currentDate.getTime() + secondToAddStart * 1000)
    console.log(currentDate);
    console.log(Date.now());
    console.log('Game planned at ' + cronTasks(futureDateForStart))
}


export const planEndGame = async (time) => {
    console.log('Game ended at ' + time)
}


export const getCurrentTimerOfPlayer = async (playerId) => {

}


export const getCurrentTimerOfGame = async (gameId) => {

}


export const cronTasks = async (futureDate) => {
    return schedule.scheduleJob(futureDate, function () {
    })
}