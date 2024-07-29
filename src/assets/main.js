document.addEventListener('DOMContentLoaded', function() {
    const topMenu = document.getElementById('add-top-menu')
    const menuToggle = document.getElementById('add-menu-toggle')
        document.addEventListener('click', (e) => {
            if (menuToggle.contains(e.target)) {
                topMenu.classList.toggle('add-topmenu-expanded')
                topMenu.classList.toggle('hidden')
            } else{
                if(topMenu.classList.contains('add-topmenu-expanded')){ 
                topMenu.classList.remove('add-topmenu-expanded')
                topMenu.classList.add('hidden')
                }
            }
        });
        var video = document.getElementById('story-video');
            video.muted = true;
       
    
});