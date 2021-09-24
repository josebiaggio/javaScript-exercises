// 6. Faça uma função que retorne o % de clientes felizes com 
// a empresa (cliente feliz é aquele que deu nota maior que 7).

const customers = [
    {name: 'customer1', nps: 7},
    {name: 'customer2', nps: 3},
    {name: 'customer3', nps: 1},
    {name: 'customer4', nps: 7},
    {name: 'customer5', nps: 6},
    {name: 'customer6', nps: 9},
    {name: 'customer7', nps: 8},
    {name: 'customer8', nps: 1},
    {name: 'customer9', nps: 7},
    {name: 'customer10', nps: 7},
    {name: 'customer11', nps: 3},
    {name: 'customer12', nps: 1},
    {name: 'customer13', nps: 7},
    {name: 'customer14', nps: 6},
    {name: 'customer15', nps: 9},
    {name: 'customer16', nps: 8},
    {name: 'customer17', nps: 1},
    {name: 'customer18', nps: 7}
]

const calculatePercentageOfHappyCustomers = customers => {
    const onlyHappyCustomers = customer => {
        if(customer.nps > 7) {
            return customer
        }
    }

    const happyCustomers = customers.filter(onlyHappyCustomers)
    
    const totalOfHappyCustomers = happyCustomers.length
    const totalOfCustomers = customers.length
    const percentageOfHappyCustomers = parseInt((totalOfHappyCustomers / totalOfCustomers) * 100)
    return percentageOfHappyCustomers
}

const result = calculatePercentageOfHappyCustomers(customers)
console.log(`São ${result}% de clientes felizes`)