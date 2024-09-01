// console.log("hell

async function getUrl(){

    const responce = await fetch('https://api.coingecko.com/api/v3/search/trending');
    const data = await responce.json();

    console.log(data);  


const coinContainer = document.getElementById('coninContainer');
 
data.coins.forEach(datacoins => {
    const coinLogo = datacoins.item.small; 
    const coinName = datacoins.item.name;
    const coinSymbol = datacoins.item.symbol;
    const coinPrice = datacoins.item.data.market_cap;


   const currencyCard = `
          <img class="img" id="img" src="${coinLogo}" alt="img1">
            <div>
                <h2 id ="name">${coinName} (${coinSymbol})</h2>
                <p id="price">₹ ${coinPrice}</p>
            </div>
   ` ;
   const currency= document.getElementById('coinsCardssss');
   const currencyCardNode = document.createElement("div");
   currencyCardNode.classList.add('coinsCards');
   currencyCardNode.innerHTML = currencyCard;

   currency.appendChild(currencyCardNode);
   

    
});


}

getUrl();