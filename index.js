// Benson's note: 
// When executed insert US based stock ticker
// It will return console.log of the Current Price

//dependencies
const yahooStockPrices = require('yahoo-stock-prices');
const readline = require('readline');


function askTicker() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('Insert US Ticker for Price:  ', function (input) {
    // Call any functions you like here. For example:
    rl.close()
    handleInput(input)
  })
}

function handleInput(input) {
  yahooStockPrices.getCurrentPrice(input, (err, price) => {
    console.log(price); // 132.05
  });
}

askTicker()