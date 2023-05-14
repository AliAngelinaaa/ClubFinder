const clubs = [
    {
        name: "Accounting",
        leaders: ["Michelle Davidowitz"],
        location: "TBA(To Be Announced)",
        email: "contact by advisor Ext (389-5555)",
        upcomingEvents: ["1","2"],
        filter: "academic"
    },
    {
        name: "Animation",
        leaders: ["Thomas Eaton"],
        location: "TBA(To Be Announced)",
        email: "contact by Advisor Ext (5713)",
        upcomingEvents: ["1","2"],
        filter: "student-Life"
    },
    {
        name: "Antheon",
        leaders: ["Robert Wong"],
        location: "TBA(To Be Announced)",
        email: "contact by Advisor Ext (5603)",
        upcomingEvents: ["1", "2"],
        filter: "student-life"
    },
    {
        name: "Art Club",
        leaders: ["Jonathan Macagba"],
        location: "TBA(To Be Announced)",
        email: "contact by Advisor Ext (5718)",
        upcomingEvents: ["1", "2"],
        filter: "arts"
    },
    {
        name: "Bilingual Club",
        leaders: ["Kevin Gayle"],
        location: "TBA(To Be Announced)",
        email: "contact by Advisor Ext (5995)",
        upcomingEvents: ["1", "2"],
        filter:"academic"
    },
    {
        name: "Brother's United",
        leaders: ["Micheal Rodriguez"],
        location: "TBA(To Be Announced)",
        email: "contact by Advisor Ext (5339)",
        upcomingEvents: ["1", "2"],
        filter: "student-life"
    },
    {
        name: "Business Society",
        leaders: ["Anna Geller","Dorina Tila"],
        location: "TBA(To Be Announced)",
        email: "contact by Advisor Ext (6731/4762)",
        upcomingEvents: ["1", "2"],
        filter: "academic"

    },
    {
        name: "Ceramics Club",
        leaders: ["Anna Belenki"],
        location: "TBA(To Be Announced)",
        email: "contact by Advistor Ext (5718)",
        upcomingEvents: ["1", "2"],
        filter: "arts"
    },
    {
        name: "Chi Alpha Epsilon National Honor Society",
        leaders: ["NaReida Crandall"],
        location: "TBA(To Be Announced)",
        email: "contact by Advistor Ext (5781)",
        upcomingEvents: ["1", "2"],
        filter: "student-life"
    },
    {
        name: "College Discovery",
        leaders: ["Kevin Gayle"],
        location: "TBA(To Be Announced)",
        email: "contact by Advistor Ext (5995)",
        upcomingEvents: ["1", "2"],
        filter: "academic"
    }
];

const clubsContainer = document.getElementById("clubs-container");

clubs.forEach(club => {
  const clubHtml = `
    <a href="./AccountingClub.html" style="text-decoration: none;">
      <div id="${club.name}" class="club-item container content-container rounded mt-4 p-0" data-category="${club.filter}">
        <div id="content-header" class="content-header-kcc rounded-top-2 fs-4 l-1">
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