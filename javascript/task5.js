let shopping = [];

console.log([...shopping]);

function addToCart(item, price) {
    let product = {
        item: item,
        price: price
    };

    shopping.push(product);
}

addToCart("Shirt", 20);
addToCart("Pants", 30);
addToCart("Shoes", 50);

console.log([...shopping]);

shopping.pop();

console.log([...shopping]);
