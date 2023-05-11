const clubs = [
    {
        name: "Jaws Club",
        leaders: ["Paul Back"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "student-life"
    },
    {
        name: "Architecture Club",
        leaders: ["Michelle Guzman"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    },
    {
        name: "Anna Nurse Culinary Workshops Club",
        leaders: ["Michelle Rojas"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    },
    {
        name: "Biomedical Informatics(BIB)",
        leaders: ["Adrian Guinrizzo"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    },
    {
        name: "Construction Management Association",
        leaders: ["Calvin Walters Jr"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    },
    {
        name: "ENT Video Club",
        leaders: ["Tristan Hassarath"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "arts"
    },
    {
        name: "Find a Solution! Chemistry Club",
        leaders: ["Jannatul Barsha"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    },
    {
        name: "IEEE (Institute of Electrical & Electronic Engineers)",
        leaders: ["Seli Brataj"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    },
    {
        name: "Industrial Design Club",
        leaders: ["Itay Rubin"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "arts"
    },
    {
        name: "Law and Paralegal's Club",
        leaders: ["Elisabeth Marangoudakis"],
        location: "TBA(To Be Announced)",
        email: "...",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    }
];

const clubsContainer = document.getElementById("clubs-container");

clubs.forEach(club => {
  const clubHtml = `
    <a href="./JawsClub.html" style="text-decoration: none;">
      <div id="${club.name}" class="club-item container content-container rounded mt-4 p-0" data-category="${club.filter}">
        <div id="content-header" class="content-header-nycct rounded-top-2 fs-4 l-1">
          <div class="club-name header-margin-left">${club.name}</div>
        </div>
        <div id="content-details" class="content-details">
          <span class="position-absolute opacity-50 start-50"><img src="./citytech.png" alt="" class="rounded-circle" style="height: 10rem; width: 10rem;"></span>
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