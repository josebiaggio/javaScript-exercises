// 8. Retorne as primeiras letras de cada palavra do nome 'George Raymond Richard Martin'.

const getFirstLetters = name => {
    const arrayName = name.split(' ')
    const arrayFirstLetters = arrayName.map(element => element[0])
    const firstLetters = arrayFirstLetters.reduce((accumulator, currentValue) => `${accumulator}${currentValue}`, '')
    return firstLetters
}

const stringName = 'George Raymond Richard Martin'
const firstLetters = getFirstLetters(stringName)
console.log(firstLetters)