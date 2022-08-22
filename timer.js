import cron from 'node-cron'

let move = 'p1'
let i = 0
let x

async function first() {
  cron.schedule('*/1 * * * * *', () => {
    if (move == 'p1') {
      console.log('player 1, ur turn')

      i++
      x = process.stdin.read()

      console.log(i)
      if (x != null) {
        console.log('u made ur move')

        x = null
        i = 0
        move = 'p2'

        second()
      }
      if (i == 10) {
        console.log('player 1, u overslept ur turn')

        i = 0
        move = 'p2'

        second()
      }
    }
  })
}

async function second() {
  cron.schedule('*/1 * * * * *', () => {
    if (move == 'p2') {
      console.log('player 2, ur turn')

      i++
      x = process.stdin.read()

      console.log(i)
      if (x != null) {
        console.log('u made ur move')

        x = null
        i = 0
        move = 'p1'

        first()
      }
      if (i == 10) {
        console.log('player 2, u overslept ur turn')

        i = 0
        move = 'p1'

        first()
      }
    }
  })
}

first();




// На игру дается 5 минут
// Игра стартует от сервера
// У первого игрока начинает уменьшатся время ->
// Первый игрок делает ход
// Его таймер уменьшается
// Ход переходит второму игрок
// Изменяется время окончания игры
// Повтор ->
// Игра заканчивается