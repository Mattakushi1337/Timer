import schedule from 'node-schedule'


export const planStartGame = async (time) => {
    console.log('Game planned at ' + time)
}


export const planEndGame = async (time) => {
    console.log('Game ended at ' + time)
}


export const getCurrentTimerOfPlayer = async (playerId) => {

}


export const getCurrentTimerOfGame = async (gameId) => {

}


export const cronTasks = async () => {
    var seondsToAddForStart = 60
    var currentDate = new Date()
    var futureDateForStart = (currentDate.getTime() + seondsToAddForStart * 1000)

    schedule.scheduleJob(futureDateForStart, function () {
        planStartGame(Date.now());
    });

    var minutesToAddForEnd = 6
    var futureDateForEnd = (currentDate.getTime() + minutesToAddForEnd * 60000)

    schedule.scheduleJob(futureDateForEnd, function () {
        planEndGame(Date.now())
    })
}