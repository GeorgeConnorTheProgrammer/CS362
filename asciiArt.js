const arg = process.argv[2]


var figlet = require('figlet');

figlet(arg, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
