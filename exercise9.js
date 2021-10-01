// 9. Retorne cada título dentro de um h1 (por ex. <h1>Tesla Model S</h1>).

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const getTitlesAndListInH1 = list => {
    const getTitle = ({ title }) => `<h1>${title}</h1>`
    const titlesInH1 = list.map(getTitle)
    return titlesInH1
}

const titlesInH1 = getTitlesAndListInH1(wishlist)
console.log(titlesInH1)