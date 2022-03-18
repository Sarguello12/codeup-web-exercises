const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const multipleLanguages = users.filter(user => user.languages.length === 3);
console.log(multipleLanguages);

const emails = users.map((user) => {
    return user.email;
})
console.log(emails) ;

const totalUsersExperience = users.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.yearsOfExperience;
}, 0)
console.log(totalUsersExperience);
console.log(totalUsersExperience / users.length);

const longestEmail = users.reduce((previousValue, currentValue) => {
    if (currentValue.email.length > previousValue.length){
        previousValue = currentValue.email;
    }

    return previousValue;
}, "")
console.log(longestEmail);

const usersNames = users.reduce((previousValue, currentValue, index, array) => {
    return previousValue + ` ${currentValue.name}${(index < (array.length - 1)) ? "," : "." }`;
}, "Your Instructors are:")
console.log(usersNames)

const uniqueLanguages = users.reduce((previousValue, currentValue) => {

    currentValue.languages.forEach(function(language){
        if(!previousValue.includes(language)){
            previousValue.push(language)
        }
    })

    return previousValue;
},[])
console.log(uniqueLanguages);