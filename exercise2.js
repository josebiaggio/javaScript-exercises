//Faça uma função que calcule a hipotenusa do triangulo retângulo, recebendo por 
//parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 16 (pitágoras).

// Pythagorean theorem: h^2 = a^2 + b^2

function calculateTheHypotenuse(sideA, sideB) {
    const hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB)
    return hypotenuse
}

const sideA = 9
const sideB = 16

const hypotenuse = calculateTheHypotenuse(sideA, sideB)
const result = `A hipotenusa do triângulo retângulo cujos lados são 9 e 16 é ${hypotenuse}`
console.log(result)