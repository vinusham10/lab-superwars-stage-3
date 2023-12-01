const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    // Instead of forloop use Map method
    // Code here
    players.forEach((x,y) => {
        detailedPlayers.push({
            name:x,
            strength: getRandomStrength(),
            image:'images/super-' + (y + 1) + '.png',
            type: y%2==0?"hero":"villain",
            id:y+1
        })
    });
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}


const view = (playerObj) => {
    let player = document.createElement('div');
    player.classList.add('player');
  
    const elements = ['image', 'name', 'strength'];
  
    for (const elementName of elements) {
      let element = document.createElement(elementName === 'image' ? 'img' : 'div');
      if (elementName === 'image') {
        element.setAttribute('src', playerObj.image);
        element.setAttribute('alt', '');
      }
      if (elementName === 'name') {
        element.className = 'name';
        element.textContent = playerObj.name;
      }
      if (elementName === 'strength') {
        element.textContent = playerObj.strength;
        element.className = 'strength';
      }
      player.appendChild(element);
    }
  
    return player;
  };
// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = document.createElement("div");
    players.filter((x) => x.type == type).forEach((x) => fragment.appendChild(view(x)));
    return fragment.innerHTML;
    
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}