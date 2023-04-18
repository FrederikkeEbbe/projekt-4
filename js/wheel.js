 // Array med det data som skal randomize
  const events = [
    {
      imgSrc: 'image/event-boardgame.jpg',
      imgAlt: 'Brætspil Monopoly',
      title: 'Brætsspilcafe',
      location: 'Seebladsgade 1',
      date: '23/04 2023'
    },
    {
      imgSrc: 'image/event-fredagsbar.jpg',
      imgAlt: 'En øl der bliver skænket',
      title: 'Fredagsbar',
      location: 'Seebladsgade 1',
      date: '14/04 2023'
    },
    {
      imgSrc: 'image/event-career.jpg',
      imgAlt: 'En person som giver et stykke papir til en anden',
      title: 'Karrieredag',
      location: 'Seebladsgade 1',
      date: '30/04 2023'
    },
    {
      imgSrc: 'image/event-semesterfest.jpg',
      imgAlt: 'Folk der fester',
      title: 'Semesterfest',
      location: 'Seebladsgade 1',
      date: '13/05 2023'
    },
    {
      imgSrc: 'image/event-vm-sport.jpg',
      imgAlt: 'Et tv med sport på, chips og øl',
      title: 'VM på UCL',
      location: 'Seebladsgade 1',
      date: '26/05 2023'
    }
  ];

  // Funktion som randomizer rækkefølgen
  function randomizeEvents() {
    let randomizedEvents = [];
    while (randomizedEvents.length < events.length) {
      const index = Math.floor(Math.random() * events.length);
      if (!randomizedEvents.includes(events[index])) {
        randomizedEvents.push(events[index]);
      }
    }
    return randomizedEvents;
  }

  // Kalder funktionen
  const randomizedEvents = randomizeEvents();

  // create a variable to store the HTML for the carousel
  let carouselHTML = '';

  // Looper igennem de randomized elementer i eventet tilføjer det til carouselHTML variablen
  for (let i = 0; i < randomizedEvents.length; i++) {
    const event = randomizedEvents[i];
    carouselHTML += `
      <div class="event-show">
        <img src="${event.imgSrc}" class="event-show-pic" alt="${event.imgAlt}">
        <div class="event-show-txtcenter">
          <div class="event-show-txt">
            <h3>${event.title}</h3>
            <h8 class="event-show-txt">${event.location}<br>${event.date}</h8>
          </div>
        </div>
      </div>
    `;
  }

  // Indsætter det i events.html
  document.getElementById('carousel').innerHTML = carouselHTML;

const element = document.querySelector("#carousel");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});