import { planStartGame } from './timer.module.js'


export const startGame = async (timeForStartGame) => {
    await planStartGame(timeForStartGame)
};


export const endGame = () => {

};