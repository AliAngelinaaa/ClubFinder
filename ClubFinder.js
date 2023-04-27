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

const filterSelect = document.getElementById('filter-select');
filterSelect.addEventListener('change', filterItems);
function filterItems() {
    const filterValue = document.getElementById('filter-select').value;
    const items = document.querySelectorAll('.club-item');
    
    items.forEach(item => {
      const category = item.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }