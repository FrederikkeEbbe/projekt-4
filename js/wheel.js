 // create an array of event data
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

  // create a function to randomize the events
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

  // call the function and get the randomized events
  const randomizedEvents = randomizeEvents();

  // create a variable to store the HTML for the carousel
  let carouselHTML = '';

  // loop through the randomized events and add them to the carouselHTML variable
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

  // display the carousel in the HTML
  document.getElementById('carousel').innerHTML = carouselHTML;

const element = document.querySelector("#carousel");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});