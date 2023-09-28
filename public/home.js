var splash = document.querySelectorAll('.js-splash');
var disapearTimer;

document.addEventListener('click', addSplash, false);

function addSplash(e) {
    for (var i=splash.length; i--;) {
        splash[i].style.left = (e.pageX - 45) + 'px';
        splash[i].style.top = (e.pageY - 45) + 'px';
    }
  }

  document.getElementById('js-cherry-rush').addEventListener('click', function() {
    location.href = '/cherry-rush/cherryRush.html'
  }, false);


