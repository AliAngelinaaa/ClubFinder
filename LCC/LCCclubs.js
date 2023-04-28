const clubs = [
  {
    name: "Bangladesh Student Association (BSA) Club",
    leaders: ["Sada Hye Jaman"],
    location: "E-129",
    email: "sjaman@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"],
    filter: "cultural"
  },
  {
    name: "Chess Club",
    leaders: ["Regina Varin-Mignano"],
    location: "Fridays: C-414",
    email: "rvarin-mignano@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Chinese Student Club",
    leaders: ["Tao Chen", "Jian Fang"],
    location: "C-234",
    email: "tchen@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"],
    filter: "cultural"
  },
  {
    name: "Creative Writing Club",
    leaders: ["Rochelle Spencer"],
    location: "C-446",
    email: "rspencer@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Criminal Justice Club",
    leaders: ["Kyle Hollar-Gregory"],
    location: "C-308",
    email: "mkoller@lagcc.cuny.edu",
    upcomingEvents: []
  },
  {
    name: "Climate Reality Club",
    leaders: ["Kevin Mark"],
    location: "M-107",
    email: "kmark@lagcc.cuny.edu",
    upcomingEvents: [1, 2]
  },
  {
    name: "Economics Club",
    leaders: ["Choon Shan Lai", "Neetu Kaushik"],
    location: "C-456",
    email: "clai@lagcc.cuny.edu",
    upcomingEvents: [1, 2]
  },
  {
    name: "Film Club",
    leaders: ["Jason Schafer", " David Stott"],
    location: "E-113",
    email: "jschafer@lagcc.cuny.edu",
    upcomingEvents: [1, 2],
    filter: ["entertainment"]
  },
  {
    name: "Finance Club",
    leaders: ["Andrea Francis"],
    location: "B-209",
    email: "afrancis@lagcc.cuny.edu",
    upcomingEvents: [1, 2]
  },
  {
    name: "Fine Arts Club",
    leaders: ["Arianne Fernandez"],
    location: "D-201",
    email: "mrossi@lagcc.cuny.edu",
    upcomingEvents: [1, 2],
    filter: ["arts"]
  },
  {
    name: "Japan Entertainment Club",
    leaders: ["Tomonori Nagano"],
    location: "Wednesdays & Fridays, M-152",
    email: "tnagano@lagcc.cuny.edu",
    upcomingEvents: [1, 2],
    filter: "cultural"
  },
  {
    name: "LaGuardia Humanitarian Initiative (LHI) Club",
    leaders: ["Deema Bayrakdar", "Tuli Chatterji"],
    location: "C-448",
    email: "dbayrakdar@lagcc.cuny.edu",
    upcomingEvents: [1, 2]
  },
  {
    name: "Licensed Practical Nursing (LPN) Club",
    leaders: ["Margarita Israilova"],
    location: "M-136",
    email: "misrailova@lagcc.cuny.edu",
    upcomingEvents: [1, 2]
  },
  {
    name: "Nutrition & Culinary Management (NCM) Club",
    leaders: ["Nicolle Fernandes", "Jenny Palios"],
    location: "M-156",
    email: "nfernandes@lagcc.cuny.edu",
    upcomingEvents: [1, 2]
  },
  {
    name: "Photography Club",
    leaders: ["Maureen Drennan"],
    location: "	C-466",
    email: "mrossi@lagcc.cuny.edu",
    upcomingEvents: [1, 2],
    filter: ["arts"]
  },
  {
    name: "Physical Therapist Assistant (PTA) Club",
    leaders: ["Debra Engel"],
    location: "E-264",
    email: "dengel@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Queer And Fierce",
    leaders: ["Nathan Tosh"],
    location: "Thursdays: MB-10B",
    email: "ntosh@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Radiologic Technology (Rad Tech) Club",
    leaders: ["Victoria Buitrago Brown", "Theresa Licari"],
    location: "M-158",
    email: "vbuitragobrown@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Red Hawk Engineering & Computer Science Club",
    leaders: ["Alaa Darabseh", "Nathan Hosannah"],
    location: "E-260",
    email: "nhosannah@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"],
    filter: "academics"
  },
  {
    name: "Registered Nurse (RN) Club",
    leaders: ["Donna Siergie-Munsey"],
    location: "E-246",
    email: "acortijo@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Science, Technology, Engineering & Mathematics (STEM) Club",
    leaders: ["Maria Entezari", "Richa Gupta"],
    location: "M-155",
    email: "rgupta@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"],
    filter: "academics"
  },
  {
    name: "Student Occupational Therapy Assistant (SOTA) Club",
    leaders: ["Luisa Hindle"],
    location: "M-161",
    email: "lhindle@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Tabletop Gaming Club",
    leaders: ["Deirdre Flood"],
    location: "C-236",
    email: "dflood@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Theatre Club",
    leaders: ["Jessica Carmona", "Stefanie Sertich"],
    location: "E-258",
    email: "jcarmona@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"],
    filter: ["arts"]
  },
  {
    name: "Therapeutic Recreation Student Association (TRSA) Club",
    leaders: ["Tameka Battle"],
    location: "M-211",
    email: "msilverman@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Veterinary Technology (Vet Tech) Club",
    leaders: ["Lara Arbach", "Lisa Flores"],
    location: "Fridays, C-443",
    email: "larbach@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"]
  },
  {
    name: "Women In Tech (WIT) Club",
    leaders: ["Malgorzata Marciniak", "Doyel Pal", "Na Xu", "Yun Ye"],
    location: "E-225",
    email: "nxu@lagcc.cuny.edu",
    upcomingEvents: ["1", "2"],
    filter: "academics"
  }
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