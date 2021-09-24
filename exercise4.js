// 4. Faça uma função que calcule o preço médio dos elementos que compõe a cesta de produtos:

const calculateAveragePrice = () => {
    const productsPrice = [28, 33, 42, 14, 10, 88, 95, 100, 29]
    let sumOfPrices = null

    for (let index = 0; index < productsPrice.length; index++) {
        sumOfPrices += productsPrice[index]
    }

    const quantityOfProducts = productsPrice.length
    const averagePrice = sumOfPrices / quantityOfProducts
    return averagePrice
}

const result = calculateAveragePrice()
console.log(`Preço médio dos produtos: R$${result.toFixed(2)}`)
