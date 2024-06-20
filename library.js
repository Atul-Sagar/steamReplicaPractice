// // document.addEventListener("DOMContentLoaded", () => {
// //     fetch('games.json')
// //         .then(response => response.json())
// //         .then(games => {
// //             const libraryContainer = document.getElementById("library-container");

// //             games.forEach(game => {
// //                 const gameItem = document.createElement("div");
// //                 gameItem.className = "game-item";

// //                 const gameImage = document.createElement("img");
// //                 gameImage.src = game.imgSrc;
// //                 gameImage.alt = game.title;

// //                 const gameInfo = document.createElement("div");
// //                 gameInfo.className = "game-info";

// //                 const gameTitle = document.createElement("h3");
// //                 gameTitle.textContent = game.title;

// //                 const gameDescription = document.createElement("p");
// //                 gameDescription.textContent = game.description;

// //                 gameInfo.appendChild(gameTitle);
// //                 gameInfo.appendChild(gameDescription);

// //                 gameItem.appendChild(gameImage);
// //                 gameItem.appendChild(gameInfo);

// //                 libraryContainer.appendChild(gameItem);
// //             });
// //         })
// //         .catch(error => console.error('Error fetching games:', error));
// // });


// document.addEventListener("DOMContentLoaded", () => {
//     fetch('games.json')
//         .then(response => response.json())
//         .then(games => {
//             const libraryContainer = document.getElementById("library-container");
//             const gameDetails = document.getElementById("game-details");
//             const gameTitle = document.getElementById("game-title");
//             const gameDescription = document.getElementById("game-description");
//             const gameHours = document.getElementById("game-hours");
//             const gameScreenshots = document.getElementById("game-screenshots");
//             const gameUpdates = document.getElementById("game-updates");

//             games.forEach(game => {
//                 const gameItem = document.createElement("div");
//                 gameItem.className = "game-item";

//                 const gameImage = document.createElement("img");
//                 gameImage.src = game.imgSrc;
//                 gameImage.alt = game.title;

//                 const gameInfo = document.createElement("div");
//                 gameInfo.className = "game-info";

//                 const gameTitleElement = document.createElement("h3");
//                 gameTitleElement.textContent = game.title;

//                 const gameDescriptionElement = document.createElement("p");
//                 gameDescriptionElement.textContent = game.description;

//                 gameInfo.appendChild(gameTitleElement);
//                 gameInfo.appendChild(gameDescriptionElement);

//                 gameItem.appendChild(gameImage);
//                 gameItem.appendChild(gameInfo);

//                 gameItem.addEventListener("click", () => {
//                     gameTitle.textContent = game.title;
//                     gameDescription.textContent = game.description;
//                     gameHours.textContent = `Hours Played: ${game.hoursPlayed}`;
//                     gameScreenshots.innerHTML = '';
//                     game.screenshots.forEach(screenshot => {
//                         const img = document.createElement("img");
//                         img.src = screenshot;
//                         img.alt = `${game.title} Screenshot`;
//                         gameScreenshots.appendChild(img);
//                     });
//                     gameUpdates.innerHTML = '';
//                     game.updates.forEach(update => {
//                         const li = document.createElement("li");
//                         li.textContent = update;
//                         gameUpdates.appendChild(li);
//                     });
//                     gameDetails.scrollIntoView({ behavior: "smooth" });
//                 });

//                 libraryContainer.appendChild(gameItem);
//             });
//         })
//         .catch(error => console.error('Error fetching games:', error));
// });


document.addEventListener("DOMContentLoaded", () => {
    fetch('games.json')
        .then(response => response.json())
        .then(games => {
            const libraryContainer = document.getElementById("library-container");
            const gameDetails = document.getElementById("game-details");
            const gameTitle = document.getElementById("game-title");
            const gameDescription = document.getElementById("game-description");
            const gameHours = document.getElementById("game-hours");
            const gameScreenshots = document.getElementById("game-screenshots");
            const gameUpdates = document.getElementById("game-updates");

            games.forEach(game => {
                const gameItem = document.createElement("div");
                gameItem.className = "game-item";

                const gameImage = document.createElement("img");
                gameImage.src = game.imgSrc;
                gameImage.alt = game.title;

                const gameInfo = document.createElement("div");
                gameInfo.className = "game-info";

                const gameTitleElement = document.createElement("h3");
                gameTitleElement.textContent = game.title;

                const gameDescriptionElement = document.createElement("p");
                gameDescriptionElement.textContent = game.description;

                gameInfo.appendChild(gameTitleElement);
                gameInfo.appendChild(gameDescriptionElement);

                gameItem.appendChild(gameImage);
                gameItem.appendChild(gameInfo);

                gameItem.addEventListener("click", () => {
                    gameTitle.textContent = game.title;
                    gameDescription.textContent = game.description;
                    gameHours.textContent = `Hours Played: ${game.hoursPlayed}`;
                    gameScreenshots.innerHTML = '';
                    game.screenshots.forEach(screenshot => {
                        const img = document.createElement("img");
                        img.src = screenshot;
                        img.alt = `${game.title} Screenshot`;
                        gameScreenshots.appendChild(img);
                    });
                    gameUpdates.innerHTML = '';
                    game.updates.forEach(update => {
                        const li = document.createElement("li");
                        li.textContent = update;
                        gameUpdates.appendChild(li);
                    });
                    gameDetails.scrollIntoView({ behavior: "smooth" });
                });

                libraryContainer.appendChild(gameItem);
            });
        })
        .catch(error => console.error('Error fetching games:', error));
});
