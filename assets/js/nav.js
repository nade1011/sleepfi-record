document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const openBtn = document.getElementById('open-btn');
    const spNav = document.getElementById('sp-nav');
    const closeBtn = document.getElementById('close-btn');
    

    openBtn.addEventListener('click', () => {
         spNav.dataset.status = "open";
         body.dataset.menu = "open";
        
    });

    closeBtn.addEventListener('click', () => {
          spNav.dataset.status = "close";
            body.dataset.menu = "close";
         
    });

});

