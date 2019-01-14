var nonStickyBarMenuIcon = document.getElementById('non_sticky_nav_menu_icon');
var nonStickyBarMenu = document.getElementById('non_sticky_nav_menu');
var stickyFabIcon = document.getElementsByClassName('sticky_navigation_FAB_icon');
var stickyNavMenu = document.getElementById('sticky_navigation_menu');


nonStickyBarMenuIcon.addEventListener('click', function() {
    if(nonStickyBarMenu.style.display === 'block') {
        nonStickyBarMenu.style.display = 'none';
    } else {
        nonStickyBarMenu.style.display = 'block';
    }
});

// console.log(stickyFabIcon[0]);

stickyFabIcon[0].addEventListener('click', function() {
    if(stickyNavMenu.style.display === 'block') {
        stickyNavMenu.style.display = 'none';
    } else {
        stickyNavMenu.style.display = 'block';
    }
});

