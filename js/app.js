

const games = [
    {
        name: "Grand Theft Auto VI",
        genre: "Acción",
        year: 2026,
        icon: "🌴",
        color: "#9d174d",
        description: "Explora Vice City y el estado de Leonida junto a Jason y Lucía."
    },
    {
        name: "Grand Theft Auto V",
        genre: "Acción",
        year: 2013,
        icon: "🚗",
        color: "#166534",
        description: "Vive las aventuras de Michael, Franklin y Trevor en Los Santos."
    },
    {
        name: "Red Dead Redemption 2",
        genre: "Aventura",
        year: 2018,
        icon: "🤠",
        color: "#78350f",
        description: "Explora el viejo oeste en una aventura de mundo abierto."
    },
    {
        name: "Elden Ring",
        genre: "RPG",
        year: 2022,
        icon: "⚔️",
        color: "#365314",
        description: "Explora las Tierras Intermedias y enfrenta enemigos legendarios."
    },
    {
        name: "God of War",
        genre: "Acción",
        year: 2018,
        icon: "🪓",
        color: "#7f1d1d",
        description: "Acompaña a Kratos y Atreus en una aventura mitológica."
    },
    {
        name: "Minecraft",
        genre: "Aventura",
        year: 2011,
        icon: "🧱",
        color: "#14532d",
        description: "Construye, explora y sobrevive en un mundo de bloques."
    },
    {
        name: "EA Sports FC 24",
        genre: "Deportes",
        year: 2023,
        icon: "⚽",
        color: "#164e63",
        description: "Disfruta del fútbol con equipos y jugadores profesionales."
    },
    {
        name: "Cyberpunk 2077",
        genre: "RPG",
        year: 2020,
        icon: "🌆",
        color: "#713f12",
        description: "Sumérgete en una ciudad futurista llena de peligros."
    },
    {
        name: "The Last of Us Part II",
        genre: "Aventura",
        year: 2020,
        icon: "🌿",
        color: "#365314",
        description: "Sobrevive en un mundo devastado junto a Ellie y Abby."
    },
    {
        name: "Resident Evil 4 Remake",
        genre: "Terror",
        year: 2023,
        icon: "🧟",
        color: "#450a0a",
        description: "Acompaña a Leon Kennedy en una peligrosa misión de rescate."
    },
    {
        name: "Forza Horizon 5",
        genre: "Carreras",
        year: 2021,
        icon: "🏎️",
        color: "#9a3412",
        description: "Conduce vehículos espectaculares por los paisajes de México."
    },
    {
        name: "Fortnite",
        genre: "Shooter",
        year: 2017,
        icon: "🪂",
        color: "#6d28d9",
        description: "Compite en partidas multijugador y explora diferentes modos."
    },
    {
        name: "Call of Duty: Black Ops 6",
        genre: "Shooter",
        year: 2024,
        icon: "🎯",
        color: "#44403c",
        description: "Participa en misiones de espionaje y combates multijugador."
    },
    {
        name: "Silent Hill 2 Remake",
        genre: "Terror",
        year: 2024,
        icon: "🌫️",
        color: "#374151",
        description: "Descubre los secretos de un misterioso pueblo cubierto de niebla."
    },
    {
        name: "The Witcher 3: Wild Hunt",
        genre: "RPG",
        year: 2015,
        icon: "🐺",
        color: "#7f1d1d",
        description: "Explora un mundo de fantasía junto a Geralt de Rivia."
    },
    {
        name: "Hogwarts Legacy",
        genre: "RPG",
        year: 2023,
        icon: "🪄",
        color: "#4338ca",
        description: "Aprende magia y descubre los secretos de Hogwarts."
    },
    {
        name: "Ghost of Tsushima",
        genre: "Acción",
        year: 2020,
        icon: "🌸",
        color: "#9f1239",
        description: "Defiende la isla de Tsushima como el samurái Jin Sakai."
    },
    {
        name: "Marvel's Spider-Man 2",
        genre: "Acción",
        year: 2023,
        icon: "🕷️",
        color: "#991b1b",
        description: "Recorre Nueva York junto a Peter Parker y Miles Morales."
    },
    {
        name: "The Legend of Zelda: Tears of the Kingdom",
        genre: "Aventura",
        year: 2023,
        icon: "🛡️",
        color: "#047857",
        description: "Explora Hyrule y descubre nuevas habilidades junto a Link."
    },
    {
        name: "Super Mario Odyssey",
        genre: "Plataformas",
        year: 2017,
        icon: "🍄",
        color: "#b91c1c",
        description: "Viaja por diferentes reinos y colecciona energilunas."
    },
    {
        name: "Hollow Knight",
        genre: "Plataformas",
        year: 2017,
        icon: "🦋",
        color: "#1e3a8a",
        description: "Explora las profundidades del misterioso reino de Hallownest."
    },
    {
        name: "Hollow Knight: Silksong",
        genre: "Plataformas",
        year: 2025,
        icon: "🪡",
        color: "#9f1239",
        description: "Acompaña a Hornet en una aventura llena de desafíos."
    },
    {
        name: "Valorant",
        genre: "Shooter",
        year: 2020,
        icon: "💥",
        color: "#be123c",
        description: "Compite en enfrentamientos tácticos con agentes especializados."
    },
    {
        name: "Counter-Strike 2",
        genre: "Shooter",
        year: 2023,
        icon: "🎯",
        color: "#a16207",
        description: "Participa en partidas competitivas de estrategia y precisión."
    },
    {
        name: "Rocket League",
        genre: "Deportes",
        year: 2015,
        icon: "🚙",
        color: "#1d4ed8",
        description: "Combina el fútbol con vehículos impulsados por cohetes."
    },
    {
        name: "NBA 2K24",
        genre: "Deportes",
        year: 2023,
        icon: "🏀",
        color: "#c2410c",
        description: "Compite en partidos de baloncesto con estrellas de la NBA."
    },
    {
        name: "Gran Turismo 7",
        genre: "Carreras",
        year: 2022,
        icon: "🏁",
        color: "#334155",
        description: "Experimenta la conducción mediante un simulador automovilístico."
    },
    {
        name: "Tekken 8",
        genre: "Peleas",
        year: 2024,
        icon: "🥊",
        color: "#6b21a8",
        description: "Domina diferentes estilos de combate y derrota a tus rivales."
    },
    {
        name: "Mortal Kombat 1",
        genre: "Peleas",
        year: 2023,
        icon: "🐉",
        color: "#92400e",
        description: "Enfrenta a luchadores legendarios en un universo renovado."
    },
    {
        name: "Stardew Valley",
        genre: "Simulación",
        year: 2016,
        icon: "🌾",
        color: "#15803d",
        description: "Administra tu granja y construye una nueva vida en el campo."
    }
];


const gameList = document.getElementById("game-list");
const search = document.getElementById("search");
const genre = document.getElementById("genre");
const connectionStatus = document.getElementById("connection-status");

// Renderizado del lado del cliente
function renderGames(gameArray) {
    document.getElementById("game-count").textContent =
    `${gameArray.length} de ${games.length} videojuegos`;
    if (gameArray.length === 0) {
        gameList.innerHTML = `
            <p class="empty-message">
                No se encontraron videojuegos.
            </p>
        `;
        return;
    }

    gameList.innerHTML = gameArray.map(game => `
        <article class="game-card">
            <div class="game-cover"
                 style="background: ${game.color}">
                ${game.icon}
            </div>

            <div class="game-info">
                <h2>${game.name}</h2>
                <p class="game-genre">${game.genre}</p>
                <p class="game-year">${game.year}</p>
                <p class="game-description">
                    ${game.description}
                </p>
            </div>
        </article>
    `).join("");
}

// Filtrar videojuegos
function filterGames() {
    const searchText = search.value.toLowerCase().trim();
    const selectedGenre = genre.value;

    const filteredGames = games.filter(game => {
        const matchesSearch = game.name
            .toLowerCase()
            .includes(searchText);

        const matchesGenre =
            selectedGenre === "all" ||
            game.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    renderGames(filteredGames);
}

// Detectar estado de conexión
function updateConnectionStatus() {
    if (navigator.onLine) {
        connectionStatus.textContent = "● Conectado a la red";
        connectionStatus.className = "online";
    } else {
        connectionStatus.textContent = "● Modo sin conexión";
        connectionStatus.className = "offline";
    }
}

// Eventos
search.addEventListener("input", filterGames);
genre.addEventListener("change", filterGames);

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

// Inicialización
renderGames(games);
updateConnectionStatus();


// Registro del Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js")
            .then(registration => {
                console.log(
                    "Service Worker registrado correctamente:",
                    registration.scope
                );
            })
            .catch(error => {
                console.error(
                    "Error al registrar el Service Worker:",
                    error
                );
            });
    });
}
