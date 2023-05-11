const clubs = [
  {
    name: "Access Futures Club",
    leaders: ["Adrian Watson", "Janessa Graham", "Luis Cortazar", "Stephanie Soto"],
    location: "City College of New York",
    email: "accessfutures@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "student-life"
  },
  {
    name: "African Student Union",
    leaders: ["Chidera Obi-Eyisi", "Jaden Hodges", "Shafau Sanni", "Chinaza Amaefule"],
    location: "City College of New York",
    email: "asu@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "cultural"
  },
  {
    name: "Alpha Phi Alpha Fraternity, Inc",
    leaders: ["Obinna Agwuncha", "Syed Tajria", "Cameron Philips", "Delorian Millie"],
    location: "City College of New York",
    email: "alphaphialpha@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "student-life"
  },
  {
    name: "American Institute of Architecture Students (AIAS)",
    leaders: ["Danyel Hueyopan", "Labiba Nazrul", "Sidney Mauricio", "Fion Li"],
    location: "City College of New York",
    email: "aias@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },
  {
    name: "American Medical Women's Association in the City College of New York",
    leaders: ["Ayesha Khan", "Fisola Aruleba", "Mariam Quraishi", "Rodyna Mostafa"],
    location: "City College of New York",
    email: "amwa_undergrad@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },
  {
    name: "American Society of Civil Engineers",
    leaders: ["Adel Alotibe", "Samantha Castro", "Ruben Martinez", "Justin Chen"],
    location: "City College of New York",
    email: "asce@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },
  {
    name: "Association for Computing Machinery",
    leaders: ["Meherun Mim", "Tanim Islam", "Abdul Rafi", "Najia Jahan"],
    location: "City College of New York",
    email: "acm@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },
  {
    name: "Badminton Club",
    leaders: ["Shahriyar Islam", "Mahim Rahman", "Shafin Rehman", "Sajida Sultana"],
    location: "City College of New York",
    email: "@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "sports"
  },
  {
    name: "Bangladesh Student Association of City College of New York",
    leaders: ["Sefat Monzor", "Mostafa Chowdhury", "Aquib Zaman", "Asfak Ahmed"],
    location: "City College of New York",
    email: "bsa@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "cultural"
  },
  {
    name: "Be The Match",
    leaders: [],
    location: "City College of New York",
    email: "",
    upcomingEvents: [],
    filter: "student-life"
  },
  {
    name: "Beta Beta Beta Honor Society",
    leaders: ["Britany Morocho", "Emely Hernandez", "Naoroz Mahmood", "Shamara Smellie"],
    location: "City College of New York",
    email: "b3honor@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "student-life"
  },

  {
    name: "Biomedical Asian Health Coalition",
    leaders: ["Jenny Chung", "Calista Kee", "Darren Cui", "Lexi Chen"],
    location: "Sophie Davis School of Biomedical Education",
    email: "bahc@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },

  {
    name: "Biomedical Engineering Society",
    leaders: ["Hana Kassem", "Mohigul Nasimova", "Andre Deosaran", "Daniel Khalil"],
    location: "City College of New York",
    email: "bmes@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },

  {
    name: "Biotechnology Club",
    leaders: ["Tabassum Sami", "Christina Ramsarran", "Joanna Thygaraj", "Kristen Barsoum"],
    location: "City College of New York",
    email: "biotech@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },

  {
    name: "Black Student Union",
    leaders: ["Max Garcia", "Jaylen Salvatto", "Omosefe Ikpia", "Halima Jagana"],
    location: "City College of New York",
    email: "@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "cultural"
  },

  {
    name: "Caribbean Students' Association",
    leaders: ["Kailah Hyndman", "Alanis Omar", "Deborah Cobourne", "Jonel Rainford"],
    location: "City College of New York",
    email: "@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "cultural"
  },

  {
    name: "CCNY Amateur Radio Society",
    leaders: ["Benjamin Trinh", "Gregory Sanchez", "Mohammad Arif", "Ahmad Adil"],
    location: "City College of New York",
    email: "arc@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "student-life"
  },

  {
    name: "CCNY Arts and Crafts",
    leaders: ["Amy Ho", "Nathaly Castillo", "Aakanksha Maharjan", "Moselle Carrero"],
    location: "City College of New York",
    email: "ccnyartsandcrafts@gtest.ccny.cuny.edu",
    upcomingEvents: ["Event 1", "Event 2"],
    filter: "academic"
  },

  {
    name: "CCNY Association for Women in Mathematics",
    leaders: ["Valentina Tillman", "Veronica Koval", "Jenni Howell", "Rhaldni Sayaman"],
    location: "City College of New York",
    email: "@gtest.ccny.cuny.edu",
    upcomingEvents: [],
    filter: "academic"
  },

  {
    name: "CCNY Circle K",
    leaders: [],
    location: "City College of New York",
    email: "",
    upcomingEvents: [],
    filter: "student-life"
  }
];

const clubsContainer = document.getElementById("clubs-container");

clubs.forEach(club => {
  const clubHtml = `
    <a href="./${club.name.split(" ").join("")}Club.html" style="text-decoration: none;">
      <div id="${club.name}" class="club-item container content-container rounded mt-4 p-0" data-category="${club.filter}">
        <div id="content-header" class="content-header rounded-top-2 fs-4 l-1">
          <div class="club-name header-margin-left">${club.name}</div>
        </div>
        <div id="content-details" class="content-details">
          <span class="position-absolute opacity-50 start-50"><img src="./ccnynewlogo.jpeg" alt="" class="rounded-circle" style="height: 10rem; width: 10rem;"></span>
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