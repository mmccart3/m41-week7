const yargs = require("yargs")
const Movie = require("./utils");

function app (argument) {
    if (argument.add) {
        const newMovie = new Movie(argument.movie,argument.actor);
        newMovie.add()}
    else if (argument.addMulti) {
            const Movie1 = new Movie(argument.movie1,argument.actor1);
            Movie1.add();
            const Movie2 = new Movie(argument.movie2,argument.actor2);
            Movie2.add();
            const Movie3 = new Movie(argument.movie3,argument.actor3);
            Movie3.add();
    } else {
            console.log ("I do not recognise that command");
    }
};

app(yargs.argv);