const searchInput = document.getElementById('search-input');
const body = document.getElementById('body');

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


  // document.getElementById('increase').addEventListener('click', increase())
  // document.getElementById('decrease').addEventListener('click', decrease())


  function increase(){
    document.getElementById('text').style.fontSize = '12rem'
    
  }

  function decrease(){
    document.getElementById('text').style.fontSize = '12rem'
    
  }
  
  
//   $(document).ready(function(){
//     $(".increaseFont,.decreaseFont").click(function(){
//        var type= $(this).val();
//        var curFontSize = $('.data').css('font-size');
//        if(type=='increase'){
//           $('.data').css('font-size', parseInt(curFontSize)+1);
//        } else{
//           $('.data').css('font-size', parseInt(curFontSize)-1);
//        }
//        // alert($('.data').css('font-size'));
//     });
//  });