// 10. Fazer uma função que returne o seguinte objeto: {
// under25:
// under40:
// under60:
//}

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true }
]

const groupAges = age => {
    if (age < 25) return 'under25'
    if (age < 40) return 'under40'
    if (age < 60) return 'under60'
}

const getVotesByAgeGroup = voters => {
    return voters.reduce((acc, value) => {
        const { age, voted } = value
        if(!voted) return {...acc}
        const ageGroup = groupAges(age)
        return {...acc, [ageGroup]: acc[ageGroup] + 1}
    }, { 
        under25: 0, 
        under40: 0, 
        under60: 0 
    })

}

const votesByAgeGroup = getVotesByAgeGroup(voters)
console.log(votesByAgeGroup)