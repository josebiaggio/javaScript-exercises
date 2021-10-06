// 12.Pegue as informações dos seguintes pokemons e agrupe-os por seus tipos:
// ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

// {
//   fire: ['Charmander'],
//   electric: ['Pikachu', 'Zapdos'],
//   water: ['Squirtle', 'Blastoise'],
//   poison: ['Bulbasaur']
// }

const pokemonNameList = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

const getPokemonTypes = pokemonNameList => {
    const pokemonNameListInLowerCase = pokemonNameList.map(pokemonName => pokemonName.toLocaleLowerCase())
    const pokemonUrlList = pokemonNameListInLowerCase.map(pokemonName => `https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    const pokemonTypeList = pokemonUrlList.map(url => {
        const response = fetch(url)
        return response
            .then(data => data.json())
            .then(({ types }) => types[0])
            .then(({ type }) => type)
            .then(({ name }) => name)
    })

    return pokemonTypeList
}

const groupPokemonsByType = (pokemonNameList, pokemonTypeList) => {
    const pokemonNameListInLowerCase = pokemonNameList.map(pokemonName => pokemonName.toLocaleLowerCase())

    const pokemonObjectList = pokemonNameListInLowerCase.map((pokemonName, index) => {
        return {
            name: pokemonName,
            type: pokemonTypeList[index]
        }
    })

    const pokemonsByType = pokemonObjectList.reduce((acc, value) => {
        const { name, type } = value
        acc[type] = acc[type] || []
        acc[type].push(name)
        return acc
    }, {})

    return pokemonsByType
}

const pokemonTypeList = getPokemonTypes(pokemonNameList)
const pokemonsByType = groupPokemonsByType(pokemonNameList, pokemonTypeList)
console.log(pokemonsByType)