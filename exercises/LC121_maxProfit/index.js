var maxProfit = function(prices) {
    let maxProfit = 0;
    let bestBuyPrice = prices[0];

    for (let index = 0; index < prices.length; index++) {
        const currentPrice = prices[index];
        const currentProfit = currentPrice - bestBuyPrice;
        bestBuyPrice = Math.min(currentPrice, bestBuyPrice);
        maxProfit = Math.max(currentProfit, maxProfit);
    }

    return maxProfit;
};

module.exports = maxProfit;
