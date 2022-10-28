console.log ('Parameter number of argv attribute: ' + process.argv.length);
console.dir (process.argv);

process.argv.forEach (function (item, index) {
    console.log (index + ' : ', item);
});