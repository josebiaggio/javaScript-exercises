//Faça uma função que retorne se vale a pena ou não abastecer com álcool. 
//A função deve receber como parâmetros o valor do álcool e da gasolina.

// Condição: para o álcool ser viável é necessário que o preço do álcool
// seja menor do que 70% do preço da gasolina

const alcoholIsViable = (alcoholPrice, gasolinePrice) => {
    const yes = 'Vale a pena abastecer com álcool'
    const no = 'Não vale a pena abastecer com álcool'

    // Condição
    const alcoholIsViable = alcoholPrice < 0.7 * gasolinePrice

    const yesOrNo = alcoholIsViable ? yes : no
    return yesOrNo
}

const alcoholPrice = 4.429
const gasolinePrice = 5.714

const result = alcoholIsViable(alcoholPrice, gasolinePrice)
console.log(result)