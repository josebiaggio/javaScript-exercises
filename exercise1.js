//. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 
//20m de profundidade e custe R$6.350/m2.

const calculateArea = (front, depth) => {
    const area = front * depth
    return area
}

const calculateGroundPrice = (area, pricePerSquareMeter) => {
    const groundPrice = area * pricePerSquareMeter
    const formattedGroundPrice = groundPrice.toFixed(2).replace('.', ',')
    return formattedGroundPrice
}

const front = 5
const depth = 20
const pricePerSquareMeter = 6350

const area = calculateArea(front, depth)
const groundPrice = calculateGroundPrice(area, pricePerSquareMeter)

const result = `O preço do terreno é R$${groundPrice}`
console.log(result)

