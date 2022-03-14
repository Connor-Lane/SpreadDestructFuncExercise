// 1a
const jpDinos = [`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`];
console.log(jpDinos);

console.log(`=====================`);

// 1b
function seeDinos([a, ...b]) {
    console.log(a);
    console.log(b);
}
seeDinos(jpDinos);

console.log(`=====================`);

// 2a
const jpCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`
};
console.log(jpCharacters);

console.log(`=====================`);

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jpCharacters);

console.log(`=====================`);

// BONUS
// 3a
const jurassicParkMovies = [
    {
        one: `Jurassic Park`,
        two: `The Lost World: Jurassic Park`,
        three: `Jurassic Park III`
    },
    {
        four: `Jurassic World`,
        five: `Jurassic World: Fallen Kingdom`,
        six: `Jurassic World: Dominion`
    }
];
console.log(jurassicParkMovies);

console.log(`=====================`);

// 3b
function seeJPMovies({one, two, three}, {four, five, six}) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(...jurassicParkMovies);