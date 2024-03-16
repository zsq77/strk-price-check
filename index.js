const axios = require('axios');

async function getStrkPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=strike&vs_currencies=usd');
    const strkPrice = response.data.strike.usd;
    return strkPrice;
  } catch (error) {
    console.error('Error retrieving STRK price:', error);
    throw error;
  }
}

module.exports = {
  getStrkPrice
};
