const clubs = [

  {
    name:'Graduate Student Organization',
    leaders:['Dr. Ronald Jackson',
      'Veronica McFarland',
      'Doris Park',
      'Jaida Tomlinson'],
    email:'officeassistant.bcgso@gmail.com',
    upcomingEvents: [],
    type: 'academic'
  },
  {
    name:'Mathematics Club of Brooklyn College',
    leaders:["Sandra Kingan",
    "Kanyshai Ryskulova",
    "Rivka Gribov",
    "Khurram Ali"],
    email:'bcmathclub@gmail.com',
    upcomingEvents: [],
    type: 'academic'
  },
  {
    name:'Mock Trial and Moot Court Team',
    leaders:['James Lynch',
    'Evelina Safanova'],
    email:'brooklyncollege.mocktrial@gmail.com',
    upcomingEvents: [],
    type: 'civil'
  },
  {
    name: "Computer Science Club",
    leaders: ["Adrian Watson", "Janessa Graham", "Luis Cortazar", "Stephanie Soto"],
    location: "Old Ingersoll Basement Room 0317",
    email: "contact@bccompsci.club",
    upcomingEvents: [],
    type: 'academic'
  },
  {
    name: "Undergraduate Student Government",
    leaders: [],
    location: "",
    email: "",
    upcomingEvents: [],
    type: 'civil'
  },
  {
    name: "Accounting Society",
    leaders: ["Professor Daniel Tinkelman"],
    location: "",
    email: "bcafsociety@gmail.com",
    upcomingEvents: [],
    type: 'academic'
  },
  {
    name: "American Medical Students Association",
    leaders: ["Dr. Silbering", "Israa Ismail","Emily Yang", "Alvin John"],
    location: "",
    email: "bcamsa@gmail.com",
    upcomingEvents: [],
    type: 'academic'
  },
  {
    name: "Brooklyn College Anime and Manga Corps",
    leaders: ["Hamilton Raymond"],
    location: "West End Building Room 137",
    email: "bcanimemanga@gmail.com",
    upcomingEvents: [],
    type: 'student-life'
  },
  {
    name: "Brooklyn College Esports and Gaming Club",
    leaders: ["Hamilton Raymond"],
    location: "",
    email: "bcesportsandgamingclub@gmail.com",
    upcomingEvents: [],
    type: 'student-life'
  },
  {
    name: "CUNY Uzbek Society",
    leaders: [""],
    location: "",
    email: "info@cunyuzbeksociety.com",
    upcomingEvents: [],
    type: 'civil'
  },
  {
    name: "Bangladesh Student Association of City College of New York",
    leaders: ["Sefat Monzor", "Mostafa Chowdhury", "Aquib Zaman", "Asfak Ahmed"],
    location: "City College of New York",
    email: "bsa@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    type: 'student-life'
  },
  {
    name: "Be The Match",
    leaders: [],
    location: "City College of New York",
    email: "",
    upcomingEvents: [],
    type: 'student-life'
  },
  
];

const clubsContainer = document.getElementById("clubs-container");
const filter = document.getElementById('filter-select');

{/* <a href="./${club.name.split(" ").join("")}Club.html" id=${club.name} style="text-decoration: none;"> */}

clubs.forEach(club => {
  const clubHtml = `
    <a href="./CSClub.html" id=${club.name} style="text-decoration: none;">
      <div class="club-item container content-container rounded mt-4 p-0" data-category="${club.filter}">
        <div id="content-header" class="content-header-bc rounded-top-2 fs-4 l-1">
          <div class="club-name header-margin-left">${club.name}</div>
        </div>
        <div id="content-details" class="content-details">
          <span class="position-absolute opacity-50 start-50"><img src="./cs.png" alt="" class="rounded-circle" style="height: 10rem; width: 10rem;"></span>
          <dl class="details-margin-left">
            <dt>Leaders</dt>
            <dd>
              <ul>
                ${club.leaders.map(leader => `<li>${leader}</li>`).join("")}
              </ul>
            </dd>
            <dt>Location</dt>
            <dd class="dd-margin-left">${club.location}</dd>
            <dt>E-mail</dt>
            <dd class="dd-margin-left">${club.email}</dd>
            <dt>Upcoming Events</dt>
            <dd>
              <ul>
                ${club.upcomingEvents.map(event => `<li>${event}</li>`).join("")}
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </a>
  `;

  clubsContainer.innerHTML += clubHtml;
});

// filter.addEventListener('change', e => {
//   console.log(filter.value)
//   if (filter.value == 'none'){
//     e.preventDefault()
//     return;
//   }
//   // e.preventDefault()

//   clubs.forEach(club => {
//     if (club.type != filter.value) {
//       console.log('hi');
//       // console.log(document.getElementById(club.name).innerHTML) 

//     }
//   })
// })

