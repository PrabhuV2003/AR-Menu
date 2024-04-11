const filterBtn = document.getElementById('filt-btn');
const menuCrads = document.querySelectorAll('.menuCrad');
const searchBox = document.getElementById('search');

// SearchBox
searchBox.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    console.log("Search Text:", searchText); // Check if searchText is correct
    
    menuCrads.forEach((menuCrad) => {
        const data = menuCrad.dataset.item;

        if (data.includes(searchText)) {
            menuCrad.style.display = 'none';
        } else {
            menuCrad.style.display = '';
        }
    });
});
