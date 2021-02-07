'use strict';

let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}

num = 50;
do {
    console.log(num);
    num++;
}
while(num < 55);

for (let i = 1; i <= 21; i++) {
    if (i === 13) {
        // break; //Сразу после break цикл полностью заканчивает работу
        continue; //Сразу после continue цикл переходит на следующий шаг
    }

    console.log(i);
}
