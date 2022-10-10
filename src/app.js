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
            newMovie.add()
            break;
        case "George":
            console.log ("Hello Mr. Weasley");
            break;
        default:
            console.log ("Hello Whoever you are");
            break;
    }
};

app(process.argv);