const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    }
];

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, nextPerson) => {

        const oldestDeathYear = oldestPerson.yearOfDeath || new Date().getFullYear();
        const oldestBirthYear = oldestPerson.yearOfBirth
        const oldestAge = oldestDeathYear - oldestBirthYear;

        const nextDeathYear = nextPerson.yearOfDeath || new Date().getFullYear();
        const nextBirthYear = nextPerson.yearOfBirth
        const nextAge = nextDeathYear - nextBirthYear;

        return (oldestAge > nextAge ? oldestPerson : nextPerson);
    });
};

// Do not edit below this line
module.exports = findTheOldest;
