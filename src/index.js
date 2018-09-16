// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const purse = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    const cash = {};

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};


    add(currency);

    function add(currency) {
        if (currency > 0) {
            let entries = Object.entries(purse).filter(itm => itm[1] <= currency);
            cash[entries[0][0]] = cash[entries[0][0]] ? cash[entries[0][0]] + 1 : 1;
            add(currency - entries[0][1]);
        }
        return
    }

    return cash;
}
