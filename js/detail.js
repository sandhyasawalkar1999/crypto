

const fetchCoinsDetails  = async () =>{

    const queryParams = new URLSearchParams(window.location.search);
    const coinId = queryParams.get("id");
    console.log(coinId);
    console.log("queryParams");


    const responce  = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);

    const data = await responce.json();

    console.log(data);

    const imageLogo = data.image.large;
    const {name,symbol} = data;
    const {inr,usd,eur,gbp} = data.market_data.ath;
    const desc = data.description.en;

    coinName = document.getElementById('name');
    coinName.innertext = `${name} (${symbol})`;

    coinImg = document.getElementById('imgesss');
    coinImg.src = `${imageLogo}`;

    coinInr = document.getElementById('inr');
    coinInr.innertext = `₹ ${inr}`;

    coinUsd = document.getElementById('usd');
    coinUsd.innertext = `$ ${usd}`;
    
    coinEur = document.getElementById('eur');
    coinEur.innertext = `₹ ${eur}`;

    coingbp = document.getElementById('gbp');
    coingbp.innertext = `₹ ${gbp}`;

    coinDesc = document.getElementById('desc');
    coinDesc.innertext = `${desc}`;
    









};

fetchCoinsDetails();

