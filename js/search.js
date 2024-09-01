const form = document.getElementById("searchForm");

function onMoreDetail(id){

    window.location.href =`detail.html?id=${id}`;
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("searchInput");
  console.log(searchInput.value);

  const res = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${searchInput.value}`
  );

  const data = await res.json();
  console.log(data);

  const searchDetail = document.getElementById("searchDetail");

  data.coins.forEach((coin,index) => {
    const coinCards = document.createElement("div");
    coinCards.classList.add("coinCard");


    coinCards.innerHTML = ` 
                    <div class="leftside">
                        <p>${index + 1}</p>
                         <img src="${coin.large}" alt="logo">
                        <h2>${coin.name}</h2>
                        <h3>(${coin.symbol})</h3
                    </div>
                    <div class="right">
                   
                 <button class="btn" onclick="onMoreDetail(`${coin.id}`)" >More Info</button>
                </div> `;

            searchDetail.appendChild(coinCards);
  });
});

// const searchDetail = document.getElementById('searchDetail');

// let searchInput = document.getElementById('searchInput');
// console.log(searchInput.value);
// // console.log(searchInput);
// function onMoreInfoClick(id)
// {
//     window.location.href =`detail.html?id=${id}`
// }
// async function getSearchDetails() {

//     const responce = await fetch('https://api.coingecko.com/api/v3/search?query=${searchInput.value}');
//     console.log(searchInput.value);

//     const data = await responce.json();
//     console.log(data);

//     data.coins.forEach((coin, index) =>{
//         const coinCards = document.createElement("div");
//         coinCards.classList.add("searchDetail");

//         coinCards.innerHTML =`
//             <div class="leftside">
//             <p>${index +1}</p>
//             <img src=${coins.large} alt="logo">
//             <h2>${coins.name}</h2>
//         </div>
//        <div>
//         <button class="btn" onclick="onMoreInfoClick('${coins.id}'>More Info</button>
//        </div>

//         `;

//      document.getElementById('searchDetail').appendChild(coinCards);

//     })

// }

// getSearchDetails();
