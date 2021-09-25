// 7. Processe o JSON que enviei pra vocês e me respondam em um:
// {
//     total:, // total de alunos
//     stateCount:, // quantos estados diferentes temos
//     infosPerState: [
//         {
//             "SP": {
//                 "totalStudents":
//                 "averageAge":
//             },
//             "RJ": {
//                 "totalStudents":
//                 "averageAge":
//             }
//         }
//     ]
// }

const data =
{
    "students": [
        { "name": "Adriana Evangelista", "state": "", "age": "" },
        { "name": "Adriano Takata", "state": "SP", "age": "30" },
        { "name": "Ana Caroline Gomes", "state": "SP", "age": "21" },
        { "name": "Antonio Moreno", "state": "SC", "age": "27" },
        { "name": "Armando de Moraes Arnaldo", "state": "CE", "age": "31" },
        { "name": "Brenno Cavalcante", "state": "SP", "age": "21" },
        { "name": "Bruno Ribeiro Da Silva", "state": "SP", "age": "19" },
        { "name": "Bruno Soares", "state": "BA", "age": "32" },
        { "name": "Carlos Alberto Victorino Junior", "state": "", "age": "" },
        { "name": "Carlos Mendes", "state": "PE", "age": "19" },
        { "name": "Carolina Daniel", "state": "", "age": "" },
        { "name": "Cristian Soares", "state": "RN", "age": "19" },
        { "name": "Domynik Vieira", "state": "MG", "age": "22" },
        { "name": "Edla Câmara", "state": "PE", "age": "21" },
        { "name": "Edwedja Lima", "state": "PE", "age": "27" },
        { "name": "Everton Reis", "state": "BA", "age": "24" },
        { "name": "Felipe Luiz Pontes de Andrade", "state": "SP", "age": "28" },
        { "name": "Felipe Rodrigues Garé Carnielli", "state": "", "age": "" },
        { "name": "Filipe Ferreira", "state": "PE", "age": "35" },
        { "name": "Francisco Márcio", "state": "CE", "age": "19" },
        { "name": "Gabriela Di Poggio", "state": "BA", "age": "24" },
        { "name": "Genilson Cavalcante de Oliveira", "state": "PB", "age": "19" },
        { "name": "Igor Ruiz de França", "state": "", "age": "" },
        { "name": "Ismália Santiago", "state": "", "age": "" },
        { "name": "Israel Cena developer", "state": "RJ", "age": "31" },
        { "name": "Jonatan Marques", "state": "RJ", "age": "25" },
        { "name": "Jordanny Alves Mizukoshi", "state": "GO", "age": "24" },
        { "name": "José Biaggio", "state": "SP", "age": "26" },
        { "name": "João Woigt Azevedo", "state": "SP", "age": "23" },
        { "name": "Jéferson Alves", "state": "SP", "age": "34" },
        { "name": "Kevin Junior Antonio Neves", "state": "PR", "age": "32" },
        { "name": "Leidson Oliveira", "state": "MG", "age": "33" },
        { "name": "Lourene Camargo", "state": "RJ", "age": "38" },
        { "name": "Luca Simaque Souza", "state": "SP", "age": "23" },
        { "name": "Lucas Suplino", "state": "RJ", "age": "29" },
        { "name": "Luiza Frota", "state": "RJ", "age": "19" },
        { "name": "Marla Ingridh", "state": "", "age": "" },
        { "name": "Mattheus Alexandre de Fabbio", "state": "", "age": "" },
        { "name": "Miller Raycell", "state": "", "age": "" },
        { "name": "Muriel Delvaux", "state": "", "age": "" },
        { "name": "Murilo Melo", "state": "RJ", "age": "29" },
        { "name": "Paulo Guilherme Damasceno", "state": "CE", "age": "24" },
        { "name": "Pedro H P Ricardo", "state": "RJ", "age": "21" },
        { "name": "Rafael Almeida", "state": "DF", "age": "30" },
        { "name": "Rafael Oliveira", "state": "RJ", "age": "30" },
        { "name": "Rafaela de Moraes Papale", "state": "MG", "age": "21" },
        { "name": "Renan Gonçalves", "state": "RJ", "age": "22" },
        { "name": "Samuel Alves", "state": "", "age": "" },
        { "name": "Samuel Cruz", "state": "CE", "age": "24" },
        { "name": "Samuel Giacomelli Bruing", "state": "RS", "age": "18" },
        { "name": "Tainá Silveira Leal", "state": "BA", "age": "28" },
        { "name": "Thiago Henrique Assi", "state": "SP", "age": "21" },
        { "name": "Vitor Henrique Grego Zillig", "state": "RS", "age": "18" }
    ]
}

// Callback function
const onlyStudentsWithCompleteData = ({ state }) => state !== ''

// Callback function
const getState = ({ state }) => state

// Callback function
const statesWithoutRepeating = (state, index, states) => {
    if (index === 0) {
        return state
    } else if (state !== states[index - 1]) {
        return state
    }
}

// Callback function
const createAnObjectForEachState = state => {
    return {
        state,
        totalStudents: null,
        sumOfAges: null,
        averageAge: null
    }
}

const countTotalOfStudents = data => {
    const totalOfStudents = data.students.length
    return totalOfStudents
}

const countOfDifferentStates = data => {
    const countOfDifferentStates = data.students
        .filter(onlyStudentsWithCompleteData)
        .map(getState)
        .sort()
        .filter(statesWithoutRepeating)

    return countOfDifferentStates.length
}

const getInfosPerState = data => {
    const states = data.students
        .filter(onlyStudentsWithCompleteData)
        .map(getState)
        .sort()
        .filter(statesWithoutRepeating)
        .map(createAnObjectForEachState)

    // Para cada estado do array "students" quando match com
    // o estado do array "states" é somado 1 estudante à chave
    // "totalStudents", a idade desse estudante é somada à
    // chave "sumOfAges" e a média das idades é feita.
    data.students.forEach(student => {
        for (let obj of states) {
            if (student.state === obj.state) {
                obj.totalStudents += 1
                obj.sumOfAges += parseInt(student.age)
                obj.averageAge = parseInt(obj.sumOfAges / obj.totalStudents)
            }
        }
    })

    // Callback function
    const editObject = ({ state, totalStudents, averageAge }) => {
        return {
            state,
            totalStudents: totalStudents,
            averageAge: averageAge
        }
    }

    const infosPerState = states.map(editObject)
    return infosPerState
}

const main = data => {
    const total = countTotalOfStudents(data)
    const stateCount = countOfDifferentStates(data)
    const infosPerState = getInfosPerState(data)

    return {
        total,
        stateCount,
        infosPerState
    }
}

const result = main(data)
console.log(result)