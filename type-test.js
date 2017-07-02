/**
 * Created by Sang on 2017-07-02.
 */
var words = "1,2,3,4".split(",");
var sum = 0;
words.forEach(function (w) { return sum += parseInt(w); });
console.log("sum : " + sum);
