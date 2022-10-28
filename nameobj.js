var result =0;

console.time ('duration_sum');
for (var i = 1; i <= 1000; i++) {
    result += 1;
}
console.timeEnd('duration_sum');
console.log (' Sum frmo 1 to 1000: %d', result);

console.log ('The name of current executed file: %s', __filename);
console.log ('The path of current executed file: %s', __dirname);

var Person = {name:'Hugo', age: 33};
console.dir (Person);