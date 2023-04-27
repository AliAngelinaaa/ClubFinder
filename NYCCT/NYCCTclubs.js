const clubs = [
  {
    name: "CCNY Arts and Crafts Club",
    leaders: ["Amy Ho", "Nathaly Castillo", "Miranda Taveras", "Aakanksha Maharjan"],
    location: "City College of New York",
    email: "ccnyartsandcraftsclub2020@gmail.com",
    upcomingEvents: ["Event 1", "Event 2"]
  },
  {
    name: "Association for Computing Machinery",
    leaders: ["Meherun Mim", "Tanim Islam", "Abdul Rafi", "Najia Jahan"],
    location: "",
    email: "acm@gtest.ccny.cuny.edu",
    upcomingEvents: ["Event 1", "Event 2"]
  }
];

const clubsContainer = document.getElementById("clubs-container");

clubs.forEach(club => {
  const clubHtml = `
    <a href="./${club.name.split(" ").join("")}Club.html" style="text-decoration: none;">
      <div id="${club.name}" class="club-item container content-container rounded mt-4 p-0">
        <div id="content-header" class="content-header rounded-top-2 fs-4 l-1">
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