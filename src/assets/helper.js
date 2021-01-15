export function sumCartQty(cart, setCartQty) {
    const total = cart.reduce((tot, curr) => tot += curr.count, 0);
    console.log(total)
    setCartQty(total);
}

export function sumTotalPrice(cart, setTotalPrice) {
    const total = cart.reduce((tot, curr) => tot += (curr.count * curr.price), 0);
    setTotalPrice(total)
}


