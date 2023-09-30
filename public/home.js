  var splash = document.querySelectorAll('.js-splash');

  document.addEventListener('click', addSplash, false);

  function addSplash(e) {
      for (var i=splash.length; i--;) {
          splash[i].style.left = (e.pageX - 45) + 'px';
          splash[i].style.top = (e.pageY - 45) + 'px';
      }
    }

    document.getElementById('js-cherry-rush').addEventListener('click', function() {
      location.href = '/cherry-rush'
    }, false);

    document.getElementById('js-movie-land').addEventListener('click', function() {
      location.href = '/movie-land'
    }, false);
    
    document.getElementById('js-about-me').addEventListener('click', function() {
      location.href = '/about-me'
    }, false);

    document.getElementsByClassName('js-home').addEventListener('click',
    function() {
      location.href = '/'
    }, false);




