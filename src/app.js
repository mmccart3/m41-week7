const Movie = require("./utils");

// console.log(process.argv)

// if (process.argv[2] === "harry") {
//     console.log("Hello Mr. Potter")
// }

function app (argv) {
    switch (argv[2]){
        case "add":
            // const movie = [argv[3],argv[4]];
            // console.log (movie);
            const newMovie = new Movie(argv[3],argv[4]);
            newMovie.add();
            break;
        case "addMulti":
            const Movie1 = new Movie(argv[3],argv[4]);
            Movie1.add();
            const Movie2 = new Movie(argv[5],argv[6]);
            Movie2.add();
            const Movie3 = new Movie(argv[7],argv[8]);
            Movie3.add();
            break;
        default:
            console.log ("I do not recognise that command");
            break;
    }
};

app(process.argv);