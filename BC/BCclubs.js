const clubs = [
  {
    name: "Access Futures Club",
    leaders: ["Adrian Watson", "Janessa Graham", "Luis Cortazar", "Stephanie Soto"],
    location: "City College of New York",
    email: "accessfutures@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "African Student Union",
    leaders: ["Chidera Obi-Eyisi", "Jaden Hodges", "Shafau Sanni", "Chinaza Amaefule"],
    location: "City College of New York",
    email: "asu@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "Alpha Phi Alpha Fraternity, Inc",
    leaders: ["Obinna Agwuncha", "Syed Tajria", "Cameron Philips", "Delorian Millie"],
    location: "City College of New York",
    email: "alphaphialpha@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "American Institute of Architecture Students (AIAS)",
    leaders: ["Danyel Hueyopan", "Labiba Nazrul", "Sidney Mauricio", "Fion Li"],
    location: "City College of New York",
    email: "aias@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "American Medical Women's Association in the City College of New York",
    leaders: ["Ayesha Khan", "Fisola Aruleba", "Mariam Quraishi", "Rodyna Mostafa"],
    location: "City College of New York",
    email: "amwa_undergrad@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "American Society of Civil Engineers",
    leaders: ["Adel Alotibe", "Samantha Castro", "Ruben Martinez", "Justin Chen"],
    location: "City College of New York",
    email: "asce@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "Association for Computing Machinery",
    leaders: ["Meherun Mim", "Tanim Islam", "Abdul Rafi", "Najia Jahan"],
    location: "City College of New York",
    email: "acm@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "Badminton Club",
    leaders: ["Shahriyar Islam", "Mahim Rahman", "Shafin Rehman", "Sajida Sultana"],
    location: "City College of New York",
    email: "@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "Bangladesh Student Association of City College of New York",
    leaders: ["Sefat Monzor", "Mostafa Chowdhury", "Aquib Zaman", "Asfak Ahmed"],
    location: "City College of New York",
    email: "bsa@gtest.ccny.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "Be The Match",
    leaders: [],
    location: "City College of New York",
    email: "",
    upcomingEvents: []
  },
  
];

const clubsContainer = document.getElementById("clubs-container");

clubs.forEach(club => {
  const clubHtml = `
    <a href="./${club.name.split(" ").join("")}Club.html" style="text-decoration: none;">
      <div id="${club.name}" class="club-item container content-container rounded mt-4 p-0" data-category="${club.filter}">
        <div id="content-header" class="content-header-lcc rounded-top-2 fs-4 l-1">
          <div class="club-name header-margin-left">${club.name}</div>
        </div>
        <div id="content-details" class="content-details">
          <span class="position-absolute opacity-50 start-50"><img src="./${club.name.split(" ").join("")}.png" alt="" class="rounded-circle" style="height: 10rem; width: 10rem;"></span>
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