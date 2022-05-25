const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    console.log(prop.openNow);
    prop.openNow ? answer = 'Open' : answer = 'Close' ;

    return answer;
}

console.log(isOpen(restorantData));



function isAverageLunchPriceTrue(fDish, sDish, average) {
  
    if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < +average.slice(0, -1)) {
        return 'Price below average';
    } else {
        return 'Above average price';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

copy.waitors = [{name: 'Mike', age: 32}];
console.log(copy);
return copy;

}

transferWaitors(restorantData);