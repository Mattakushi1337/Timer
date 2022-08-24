import { createCronTask } from "./timer.module.js";

export const makeMove = () => {

};


export const thinkAboutAMove = async (timeForMove) => {
    await createCronTask('11', timeForMove, "player1:move")

}