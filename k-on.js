import { characters } from "./data/data-characters.js";
import { tracks } from "./data/data-songs.js";

const trackContainer = document.getElementById('js-track-container');
console.log(characters);
console.log(tracks);
//today I have created the Character class that contains text and image info about each girl. Then I created a function that renders the web page's character description section depending on the id of the button we click. Then it finds the right character with the given id and gets it's properties. Then it generates the HTML code for that character with the given properties, as well as makes the generate tracks button interactive by giving it a unique id identical to the character id.
//The next step would be creating the TrackInfo class with the length, album cover, album description, as well as a youtube listen link properties to make that button actually interactive. 
//The final step would be manually adding character descriptions and different character tracks into the data files and then using them to generate the rest of the girls. That's it! 

//Now I just need to add the character descriptions and random tracks for each character. 

//Now the only remaining thing is the character tracks for other characters. We are almost done! 
function renderCharacterDescription (id) {
  const containerElement = document.getElementById('character-description');
  containerElement.classList.add('zero-opacity');
  containerElement.classList.remove('full-opacity');
  setTimeout (() => {
    containerElement.classList.remove('zero-opacity');
    containerElement.classList.add('full-opacity');
  }, 1)
  let imageSrc, name, overview, personality, musicalSkills;
  for (let i = 0; i < characters.length; i++) {
    if (id === i) {
      console.log('found the character')
      const character = characters[i];
      imageSrc = character.imageSrc;
      name = character.name;
      overview = character.overview;
      personality = character.personality;
      musicalSkills = character.musicalSkills;
    }
  }

  containerElement.innerHTML = `
  <div class="image-container-div">
    <img src="${imageSrc}" alt="" class="main-portrait">
  </div>

  <div class="text-container-div">
    <div class="name-container">
      ${name}
    </div>
    <div class="text-container">
      <p class="overview">
        ${overview}
      </p>
      <p class="personality">
        ${personality}
      </p>
      <p class="musical-skills">
        ${musicalSkills}
      </p>
      
    </div>
    <div class="button-container" data-character-number="${id}" id="generate-button">
      <button class="generate-button" id="generate-button">
        Generate random track
      </button>
    </div>
  </div>
  `

  const buttonElement = document.getElementById('generate-button');
  buttonElement.addEventListener('click', () => {
    const id = buttonElement.dataset.characterNumber;
    console.log(id);
    renderTracksDescription(id);
  })
  console.log(buttonElement.dataset.characterNumber);

  trackContainer.innerHTML = '';
}

const headerElementArray = document.querySelectorAll('.js-header-portrait');
headerElementArray.forEach((element, index) => {
  const id = index;
  element.addEventListener('click', () => {
    console.log(id);
    renderCharacterDescription(id);
  })
})

let character, name, imageSrc, length, trackInfo, youtubeLink;
let trackChosen;
function renderTracksDescription (characterNumber) {
  console.log(characterNumber);
  let characterName;

  switch (characterNumber) {
    case '0':
      characterName = 'Yui';
      break;
    
    case '1':
      characterName = 'Ritsu';
      break;

    case '2':
      characterName = 'Mio';
      break;

    case '3':
      characterName = 'Mugi';
      break;

    case '4':
      characterName = 'Azusa';
      break;
  }
  /* if (characterNumber === '0'){
    characterName = 'Yui';
    console.log(characterName);
  } */

  const characterTracks = tracks.filter((track) => {
    if (track.character === characterName) {
      return true;
    } else {
      return false;
    }
  })
  console.log(characterTracks);

  const randomNumber = Math.random();
  console.log(randomNumber, 'random number');
  const interval = 1 / characterTracks.length;
  
  
  for (let i = 0; i < characterTracks.length; i++) {
    if (randomNumber >= i * interval && randomNumber < (i + 1) * interval) {
      console.log(i, 'current i', 'interval found');
      if (trackChosen === i){
        console.log('same track chosen');
        renderTracksDescription(characterNumber); //if we just call the recursion here, we get the function that successfully renders the track part of the web page. However, then the original function continues without the variables being destructured properly and ends up displaying undefined on the web page. To fix this issue we need to create them outside the function scope so that they can be reassigned inside the function and then rendered on the web page successfully. 
      } else if (trackChosen !== i) {
        trackChosen = i;
        console.log(`chosen track: ${trackChosen}`)
        character = characterTracks[i].character;
        name = characterTracks[i].name;
        imageSrc = characterTracks[i].imageSrc;
        length = characterTracks[i].length;
        trackInfo = characterTracks[i].trackInfo;
        youtubeLink = characterTracks[i].youtubeLink;
        console.log(character, name, imageSrc, length, trackInfo, youtubeLink);
      }
      
    }
  }
  trackContainer.classList.add('zero-opacity');
  trackContainer.classList.remove('full-opacity');
  setTimeout (() => {
    trackContainer.classList.remove('zero-opacity');
    trackContainer.classList.add('full-opacity');
  }, 1)
  trackContainer.innerHTML = `
  <div class="track-name-container">
    ${name}
  </div>
  <div class="track-image-container">
    <img src="${imageSrc}" alt="" class="track-image">
  </div>
  <div class="track-length">
    Length: ${length}
  </div>
  <div class="track-album-info">
    ${trackInfo}
  </div>
  <div class="listen-button-container">
    <a href="${youtubeLink}" target="_blank">
      <button class="listen-button" id="listen-button">
        Listen here
      </button>
    </a>
  </div>
  `
}