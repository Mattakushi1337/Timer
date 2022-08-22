import http from 'http';
import { Chess } from 'chess.js';


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

import { startGame } from './modules/game.module.js';
import { makeMove, thinkAboutAMove } from './modules/player.module.js';
import { cronTasks, planStartGame } from './modules/timer.module.js';


// https://metanit.com/web/nodejs/2.9.php


import Emitter from 'events';


let emitter = new Emitter();

// На игру дается 5 минут
// Игра стартует от сервера
// У первого игрока начинает уменьшатся время ->
// Первый игрок делает ход
// Его таймер уменьшается
// Ход переходит второму игрок
// Изменяется время окончания игры
// Повтор ->
// Игра заканчивается


server.listen(port, hostname, async () => {



    await cronTasks();
    // Устанавливается начало игры

    // Установить чья очередь

    await thinkAboutAMove(2000);






    emitter.on('player:step', function (data) {
        console.log("Hello all!", data);
        makeMove('payload');

    });

    emitter.on('game:end', function (data) {
        console.log("Привет!", data);
    });



    emitter.emit("player:step", { move: "d4" });


    setTimeout(() => {
        emitter.emit("game:end", { test: "345" });

    }, 2000);



    // console.log(`Server running at http://${hostname}:${port}/`);


    // const chess = new Chess();

    // while (!chess.game_over()) {
    //     const moves = chess.moves();
    //     const move = moves[Math.floor(Math.random() * moves.length)];
    //     chess.move(move);
    //     console.log(chess.ascii())
    // }

});