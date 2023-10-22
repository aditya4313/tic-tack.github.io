document.getElementById('checkbox').addEventListener('change', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  });
  
  // Trigger the initial animation after 1 second
  setTimeout(function() {
    var contentContainer = document.querySelector('.content__container');
    contentContainer.style.animation = 'moveUp 1s forwards';
    
    // Move to the top of the page after the initial animation
    setTimeout(function() {
      contentContainer.style.top = '0';
    }, 1000);
  }, 1000);



  