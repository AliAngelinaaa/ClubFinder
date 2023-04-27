const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', function () {
    const query = searchInput.value.trim().toLowerCase();

    const clubItems = document.querySelectorAll('.club-item');
    clubItems.forEach(function (clubItem) {
        const clubName = clubItem.querySelector('.club-name').textContent.trim().toLowerCase();
        if (clubName.includes(query)) {
            clubItem.style.display = 'block';
        } else {
            clubItem.style.display = 'none';
        }
    });
});
