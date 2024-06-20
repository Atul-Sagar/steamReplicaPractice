// document.addEventListener("DOMContentLoaded", () => {
//     const games = [
//         { title: "Game Title 1", price: "$19.99", imgSrc: "game1.jpg" },
//         { title: "Game Title 2", price: "$29.99", imgSrc: "game2.jpg" },
//         { title: "Game Title 3", price: "$39.99", imgSrc: "game3.jpg" },
//         // Add more games as needed
//     ];

//     const gamesContainer = document.getElementById("games-container");

//     games.forEach(game => {
//         const gameItem = document.createElement("div");
//         gameItem.className = "game-item";

//         const gameImage = document.createElement("img");
//         gameImage.src = game.imgSrc;
//         gameImage.alt = game.title;

//         const gameInfo = document.createElement("div");
//         gameInfo.className = "game-info";

//         const gameTitle = document.createElement("h3");
//         gameTitle.textContent = game.title;

//         const gamePrice = document.createElement("p");
//         gamePrice.textContent = game.price;

//         gameInfo.appendChild(gameTitle);
//         gameInfo.appendChild(gamePrice);

//         gameItem.appendChild(gameImage);
//         gameItem.appendChild(gameInfo);

//         gamesContainer.appendChild(gameItem);
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
    fetch('games.json')
        .then(response => response.json())
        .then(games => {
            const gamesContainer = document.getElementById("games-container");

            games.forEach(game => {
                const gameItem = document.createElement("div");
                gameItem.className = "game-item";

                const gameImage = document.createElement("img");
                gameImage.src = game.imgSrc;
                gameImage.alt = game.title;

                const gameInfo = document.createElement("div");
                gameInfo.className = "game-info";

                const gameTitle = document.createElement("h3");
                gameTitle.textContent = game.title;

                const gamePrice = document.createElement("p");
                gamePrice.textContent = game.price;

                gameInfo.appendChild(gameTitle);
                gameInfo.appendChild(gamePrice);

                gameItem.appendChild(gameImage);
                gameItem.appendChild(gameInfo);

                gamesContainer.appendChild(gameItem);
            });
        })
        .catch(error => console.error("Error fetching games: ", error))
})
