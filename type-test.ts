/**
 * Created by Sang on 2017-07-02.
 */
const words = '1,2,3,4'.split(',');
let sum = 0;
words.forEach(w => sum += parseInt(w, 10));
console.log(`sum : ${sum}`);
